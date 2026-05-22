"use client";

import React, { useEffect, useState } from 'react';
import translations, { Language } from './lib/translations';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Tech from './sections/Tech';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];
  const typingPhrases = t.hero.titlePhrases;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(typingPhrases[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = typingPhrases[phraseIndex];
  const displayedText = currentPhrase.slice(0, charIndex);

  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setPhraseIndex(0);
    setCharIndex(typingPhrases[0].length);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const speed = isDeleting ? 30 : charIndex === currentPhrase.length ? 2500 : 120;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setCharIndex(prev => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % typingPhrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentPhrase, isDeleting, typingPhrases.length]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    const header = document.getElementById('portfolio_header');

    if (element) {
      const headerOffset = header?.offsetHeight ?? 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset - 16;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const skillsListFrontend: Skill[] = [
    { name: 'TypeScript', level: 98, color: 'bg-blue-500' },
    { name: 'React / Next.js', level: 95, color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-indigo-400' },
    { name: 'UI/UX Layouts', level: 88, color: 'bg-purple-400' },
    { name: 'Web Performance', level: 86, color: 'bg-sky-500' }
  ];

  const skillsListBackend: Skill[] = [
    { name: 'Java / Spring Boot', level: 94, color: 'bg-green-600' },
    { name: 'JWT / OAuth Security', level: 92, color: 'bg-red-500' },
    { name: 'REST APIs', level: 90, color: 'bg-orange-500' },
    { name: 'Node.js', level: 86, color: 'bg-cyan-500' },
    { name: 'MySQL / PostgreSQL', level: 88, color: 'bg-blue-600' }
  ];

  const skillsListTools: Skill[] = [
    { name: 'Git / GitHub Versioning', level: 96, color: 'bg-slate-700' },
    { name: 'Docker & Containerization', level: 88, color: 'bg-blue-400' },
    { name: 'Performance Build', level: 90, color: 'bg-yellow-500' },
    { name: 'CI / Deployment Workflows', level: 84, color: 'bg-fuchsia-500' }
  ];

  return (
    <div id="app_root" className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased selection:bg-blue-500/20 relative overflow-hidden">

      <Header t={t} lang={lang} setLang={setLang} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} scrollTo={scrollTo} />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-12 py-10 relative z-10 flex flex-col space-y-24 md:space-y-36">
        <Hero t={t} displayedText={displayedText} cursorVisible={cursorVisible} scrollTo={scrollTo} />
      </main>
      <main className="w-full mx-auto" >
        <About t={t} />
        <Tech t={t} frontend={skillsListFrontend} backend={skillsListBackend} tools={skillsListTools} />
        <Projects t={t} />
      </main>
      <main className='w-full max-w-7xl mx-auto px-4 md:px-12 py-10 relative z-10 flex flex-col space-y-24 md:space-y-36'>
        <Contact t={t} formData={formData} setFormData={setFormData} isSubmitting={isSubmitting} submitStatus={submitStatus} handleContactSubmit={handleContactSubmit} />
      </main>

      <Footer t={t} scrollTo={scrollTo} />
    </div>
  );
}