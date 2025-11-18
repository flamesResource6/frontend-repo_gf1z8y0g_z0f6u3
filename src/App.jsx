import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import { FeaturesGrid, FastLimit } from './components/Feature';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import { translations, defaultLang } from './i18n';
import BackgroundFX from './components/BackgroundFX';

function App() {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved && (saved === 'en' || saved === 'es')) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen w-full bg-white text-[#333333]">
      <BackgroundFX />
      {/* Language switcher */}
      <div className="fixed right-4 top-4 z-50">
        <div className="rounded-full border border-[#EEEEEE] bg-white/90 shadow-md backdrop-blur px-2 py-1 flex items-center gap-1">
          <button
            onClick={() => setLang('es')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${lang === 'es' ? 'bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white' : 'text-[#333333]'}`}
            aria-pressed={lang === 'es'}
          >ES</button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${lang === 'en' ? 'bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white' : 'text-[#333333]'}`}
            aria-pressed={lang === 'en'}
          >EN</button>
        </div>
      </div>

      {/* Hero with image carousel */}
      <Hero lang={lang} t={t} />

      {/* Three feature sections */}
      <FeaturesGrid lang={lang} t={t} />

      {/* Fast limit CTA */}
      <FastLimit lang={lang} t={t} />

      {/* Comparison section */}
      <Comparison lang={lang} t={t} />

      {/* Steps section */}
      <Steps lang={lang} t={t} />

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-[#666666]">
          © {new Date().getFullYear()} Novacard. {t.common.footer}
        </div>
      </footer>
    </div>
  );
}

export default App
