'use client';

import { useState } from 'react';
import { Mail, Globe, Pin, CheckCircle2, AlertCircle, Send } from '../components/icons';

export default function Contact({ t }: any) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    website: '',
    source: 'felipegoulart.dev',
    formStartedAt: Date.now(),
  });

  const [response, setResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      website: '',
      source: 'felipegoulart.dev',
      formStartedAt: Date.now(),
    });
  };

  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse('');

    try {
      setIsSubmitting(true);

      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data.message);

      if (res.ok) {
        resetForm();
      }
    } catch (error) {
      setResponse('Error sending email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact_section"
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8 scroll-mt-20 items-center md:mt-16"
    >
      <div className="lg:col-span-6 space-y-6">
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#16a34a] bg-blue-50/50 px-3 py-1 rounded-full">
            {t.contact.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-normal">
            {t.contact.desc}
          </p>
        </div>

        <div className="space-y-4 pt-4 text-sm font-semibold text-gray-600 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-3 w-full max-w-[340px] justify-start">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm text-blue-600">
              <Mail size={18} />
            </div>
            <span>ofelipegoulart@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 w-full max-w-[340px] justify-start">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm text-green-500">
              <Globe size={18} />
            </div>
            <span>felipegoulart.dev</span>
          </div>

          <div className="flex items-center gap-3 w-full max-w-[340px] justify-start">
            <div className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm text-orange-500">
              <Pin size={18} />
            </div>
            <span>{t.social.location}</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-4xl p-6 sm:p-8 shadow-2xl relative">
          <form onSubmit={handleSubmitContact} className="space-y-5">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="input_name" className="text-[10px] font-bold text-gray-400 tracking-wider uppercase ml-1">
                  {t.contact.labelName}
                </label>
                <input
                  id="input_name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderName}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm transition-all text-slate-850"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="input_email" className="text-[10px] font-bold text-gray-400 tracking-wider uppercase ml-1">
                  {t.contact.labelEmail}
                </label>
                <input
                  id="input_email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.placeholderEmail}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm transition-all text-slate-850"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="input_phone" className="text-[10px] font-bold text-gray-400 tracking-wider uppercase ml-1">
                {t.contact.labelPhone}
              </label>
              <input
                id="input_phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.contact.placeholderPhone}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm transition-all text-slate-850"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="input_message" className="text-[10px] font-bold text-gray-400 tracking-wider uppercase ml-1">
                {t.contact.labelMsg}
              </label>
              <textarea
                id="input_message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitContact(e as any);
                  }
                }}
                placeholder={t.contact.placeholderMsg}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 text-sm transition-all resize-none text-slate-850"
                required
              />
            </div>

            {response === 'Email sent successfully' && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-2.5 text-emerald-800 text-sm font-medium">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>{t.contact.success}</span>
              </div>
            )}

            {(response === 'Method not allowed' ||
              response === 'Missing required fields' ||
              response === 'Failed to send mail' ||
              response === 'Error sending email.' ||
              response === 'Too many requests. Try again later.' ||
              response === 'Submission too fast' ||
              response === 'Spam detected') && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2.5 text-red-800 text-sm font-medium">
                  <AlertCircle size={16} className="text-red-500 shrink-0" />
                  <span>{response}</span>
                </div>
              )}

            <button
              id="btn_contact_submit"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#0066cc] hover:bg-[#0077ee] disabled:bg-blue-400 text-white rounded-xl font-bold text-sm hover:cursor-pointer transition-colors shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2"
            >
              <Send size={15} />
              {isSubmitting ? t.contact.btnSending : t.contact.btnSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}