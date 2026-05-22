import React from 'react';
import { Linkedin, Github } from '../components/icons';

export default function Footer({ t, scrollTo }: { t: any; scrollTo: (id: string) => void }) {
  return (
    <footer id="portfolio_footer" className="bg-white border-t border-gray-200/80 mt-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-1.5">
          <p className="text-[13px] font-semibold text-gray-500">{t.footer.desc}</p>
          <p className="text-xs text-gray-400 text-normal">© 2026 Felipe Goulart. {t.footer.rights}</p>
        </div>
        <div id="footer_socials" className="flex items-center space-x-5 font-bold select-none">
          <a 
            href="https://linkedin.com/in/felipe-souza-goulart" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-slate-700 transition-colors shadow-sm"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://github.com/ofelipegoulart" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-slate-900 hover:text-white text-slate-700 transition-colors shadow-sm"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <p className="text-xs text-gray-300">|</p>
          <button 
            onClick={() => scrollTo('contact_section')} 
            className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </div>
      </div>
    </footer>
  );
}
