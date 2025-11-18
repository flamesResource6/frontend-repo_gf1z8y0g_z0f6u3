import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  'https://disk.yandex.ru/i/U7BjJyXkuarMYw',
  'https://disk.yandex.ru/i/OvEaqVp15d3Vkg',
  'https://disk.yandex.ru/i/ArjAnSsb3AIzfQ',
];

export default function Hero({ t }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Novacard hero visual"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            decoding="async"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* white overlay to ensure readability at edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#0A2B7C]">{t.common.brand}</p>
        <h1 className="mb-4 bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-[#333333] sm:text-xl">
          {t.hero.sub}
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#apply" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-400/20 ring-1 ring-fuchsia-300/40 transition hover:translate-y-[-1px]">
            {t.hero.primary}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#apply" className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white">
            {t.hero.secondary}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <div className="text-xs text-[#666666] mt-1">{t.hero.secondaryNote}</div>
        </div>
      </div>
    </section>
  );
}
