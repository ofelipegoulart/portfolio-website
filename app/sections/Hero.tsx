import React from 'react';
import { Sparkles, ArrowRight } from '../components/icons';

interface HeroProps {
  t: any;
  displayedText: string;
  cursorVisible: boolean;
  scrollTo: (id: string) => void;
}

export default function Hero({ t, displayedText, cursorVisible, scrollTo }: HeroProps) {
  return (
    <section id="hero_section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 min-h-screen items-start">
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
        <div className="space-y-4">
          <div className="text-center lg:text-left">
            <span className="text-center lg:text-left px-3.5 py-1.5 bg-blue-50/80 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100/60 inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles size={13} className="animate-spin" style={{ animationDuration: '3s' }} />
              {t.hero.badge}
            </span>
          </div>
          <h1 className="text-center lg:text-left hero-title lg:text-nowrap text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#1d1d1f]">
            <span>{t.hero.titleStart}</span>
            <span className="block">
              {t.hero.titleGradient}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-green-500">
                {displayedText}
                <span
                  className="inline-block w-0.5 h-[0.95em] bg-[#1d1d1f] align-text-top translate-y-[0.20em]"
                  style={{ opacity: cursorVisible ? 1 : 0 }}
                />
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-normal">
            {t.hero.desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            id="hero_cta_primary"
            onClick={() => scrollTo('contact_section')}
            className="px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} />
          </button>
          <button
            id="hero_cta_secondary"
            onClick={() => scrollTo('projects_section')}
            className="px-8 py-4 bg-white/70 hover:bg-white backdrop-blur-sm hover:backdrop-blur-none text-[#1d1d1f] border border-gray-300/60 hover:border-gray-400 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
