import React from 'react';
import { Menu, X } from '../components/icons';
import Brand from '../components/Brand';

interface HeaderProps {
  t: any;
  lang: 'pt' | 'en';
  setLang: (l: 'pt' | 'en') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  scrollTo: (id: string) => void;
}

const classNameNavItems = "text-[#1d1d1f]/70 hover:text-[#16a34a] transition-colors cursor-pointer";

export default function Header({ t, lang, setLang, mobileMenuOpen, setMobileMenuOpen, scrollTo }: HeaderProps) {
  return (
    <header id="portfolio_header" className="sticky top-0 w-full h-16 bg-white/70 backdrop-blur-md border-b border-gray-200/40 flex items-center px-4 md:px-12 z-50">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <div id="brand_logo" className="text-[#1d1d1f]" style={{ color: '#1d1d1f' }}>
          <Brand />
        </div>

        <nav id="desktop_navbar" className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => scrollTo('hero_section')} className={classNameNavItems}>{t.nav.home}</button>
          <button onClick={() => scrollTo('about_section')} className={classNameNavItems}>{t.nav.about}</button>
          <button onClick={() => scrollTo('tech_section')} className={classNameNavItems}>{t.nav.tech}</button>
          <button onClick={() => scrollTo('projects_section')} className={classNameNavItems}>{t.nav.projects}</button>
          <button onClick={() => scrollTo('contact_section')} className={classNameNavItems}>{t.nav.contact}</button>
        </nav>

        <div className="flex items-center space-x-4">
          <div id="lang_switcher" className="bg-gray-100/80 p-0.5 rounded-full flex border border-gray-200/40">
            <button 
              id="btn_lang_pt"
              onClick={() => setLang('pt')} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${lang === 'pt' ? 'bg-white text-[#16a34a] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              PT
            </button>
            <button 
              id="btn_lang_en"
              onClick={() => setLang('en')} 
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${lang === 'en' ? 'bg-white text-[#16a34a] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              EN
            </button>
          </div>

          <button 
            id="mobile_menu_trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile_navbar" className="md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/80 p-6 z-40 flex flex-col space-y-4 shadow-xl transition-all duration-300">
          <button onClick={() => scrollTo('hero_section')} className={classNameNavItems}>{t.nav.home}</button>
          <button onClick={() => scrollTo('about_section')} className={classNameNavItems}>{t.nav.about}</button>
          <button onClick={() => scrollTo('tech_section')} className={classNameNavItems}>{t.nav.tech}</button>
          <button onClick={() => scrollTo('projects_section')} className={classNameNavItems}>{t.nav.projects}</button>
          <button onClick={() => scrollTo('contact_section')} className={classNameNavItems}>{t.nav.contact}</button>
        </div>
      )}
    </header>
  );
}
