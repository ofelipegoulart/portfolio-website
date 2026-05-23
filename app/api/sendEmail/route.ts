import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type RateEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MIN_SUBMIT_TIME_MS = 4000;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 120;

const rateMap = new Map<string, RateEntry>();

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();

  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return 'unknown';
}

function applyRateLimit(ip: string) {
  const now = Date.now();
  const existing = rateMap.get(ip);

  if (!existing || existing.resetAt < now) {
    rateMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  rateMap.set(ip, existing);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - existing.count,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rate = applyRateLimit(ip);

    if (!rate.allowed) {
      return NextResponse.json(
        { message: 'Too many requests. Try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      source,
      website,
      formStartedAt,
    } = body;

    if (website && String(website).trim() !== '') {
      return NextResponse.json(
        { message: 'Spam detected' },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const safeName = String(name).trim();
    const safeEmail = String(email).trim().toLowerCase();
    const safePhone = phone ? String(phone).trim() : '';
    const safeMessage = String(message).trim();
    const safeSource = source ? String(source).trim() : 'site';
    const safeStartedAt = Number(formStartedAt);

    if (
      !Number.isFinite(safeStartedAt) ||
      Date.now() - safeStartedAt < MIN_SUBMIT_TIME_MS
    ) {
      return NextResponse.json(
        { message: 'Submission too fast' },
        { status: 400 }
      );
    }

    if (safeName.length === 0 || safeName.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { message: 'Invalid name' },
        { status: 400 }
      );
    }

    if (
      safeEmail.length === 0 ||
      safeEmail.length > MAX_EMAIL_LENGTH ||
      !isValidEmail(safeEmail)
    ) {
      return NextResponse.json(
        { message: 'Invalid email' },
        { status: 400 }
      );
    }

    if (safeMessage.length < 10 || safeMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { message: 'Invalid message length' },
        { status: 400 }
      );
    }

    const allowedSources = ['felipegoulart.dev', 'portfolio', 'contact-page'];
    const finalSource = allowedSources.includes(safeSource)
      ? safeSource
      : 'unknown-source';

    const subject = `[${finalSource}] Nova mensagem de ${safeName}`;

    const { error } = await resend.emails.send({
      from: 'Contato Site <onboarding@resend.dev>',
      to: ['ofelipegoulart@gmail.com'],
      replyTo: safeEmail,
      subject,
      text: `
Origem: ${finalSource}
IP: ${ip}
Nome: ${safeName}
Email: ${safeEmail}
Telefone: ${safePhone || 'Não informado'}

Mensagem:
${safeMessage}
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { message: 'Failed to send mail' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { message: 'Failed to send mail', error: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}