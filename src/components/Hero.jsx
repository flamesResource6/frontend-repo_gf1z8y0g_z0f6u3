import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Fallback images (original static URLs)
const fallbackImages = [
  'https://disk.yandex.ru/i/U7BjJyXkuarMYw',
  'https://disk.yandex.ru/i/OvEaqVp15d3Vkg',
  'https://disk.yandex.ru/i/ArjAnSsb3AIzfQ',
];

// Requested images (1280x720)
const img1 = 'https://downloader.disk.yandex.ru/preview/d9e64db687c7ca09b546b642fd5877d22e8f8c24c2a6f594b04f0c5785ce0925/691ca40b/xV6qqMziGl0FNZXlZsOm68yAOFjHQxuDEtoeYYOR3fmWsLfIPcGkygVkcWCMmBz6oPgp1U4wETe2lMd05VIAuw%3D%3D?uid=0&filename=img2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1280x720';
const img2 = 'https://downloader.disk.yandex.ru/preview/87ecf89be68ca3935931cd358cbc4921d97858831181c407bab195bdf1709f8f/691ca29a/_UGKYnmW4LF0UfYtfbEZKEwirBMV0Uz3OMgsQmg4I8QRWrl_pdsWIL0aZjpusKUrx1Anw9euTMs4lPLIsqKD0A%3D%3D?uid=0&filename=img3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1280x720';
const img3 = 'https://downloader.disk.yandex.ru/preview/ba5585933c4a075ca7bed21e189d886b91182d8d29ef27e0517718898dd1859c/691ca427/7EsL_ZCPzAAQVG3lz5x5xkwirBMV0Uz3OMgsQmg4I8TvrbKmzGwqD2nhHGZwinv5PRK1HDVVZsOJNTMct9nzVw%3D%3D?uid=0&filename=img1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v3&size=1280x720';
const requestedImages = [img1, img2, img3];

function preloadImage(src, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const timer = setTimeout(() => {
      img.onload = null;
      img.onerror = null;
      reject(new Error('timeout'));
    }, timeoutMs);
    img.onload = () => {
      clearTimeout(timer);
      resolve(src);
    };
    img.onerror = () => {
      clearTimeout(timer);
      reject(new Error('error'));
    };
    img.referrerPolicy = 'no-referrer';
    img.src = src;
  });
}

export default function Hero({ t }) {
  const [images, setImages] = useState(fallbackImages);
  const [index, setIndex] = useState(0);

  // Try to use the requested images; fall back to the originals if any fail
  useEffect(() => {
    let active = true;
    Promise.allSettled(requestedImages.map((src) => preloadImage(src)))
      .then((results) => {
        if (!active) return;
        const available = results
          .map((r, i) => (r.status === 'fulfilled' ? requestedImages[i] : null))
          .filter(Boolean);
        if (available.length > 0) {
          setImages(available);
          setIndex(0);
        } else {
          setImages(fallbackImages);
        }
      })
      .catch(() => {
        if (!active) return;
        setImages(fallbackImages);
      });
    return () => {
      active = false;
    };
  }, []);

  // Carousel rotation
  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images]);

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt="Novacard hero visual"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            decoding="async"
            loading={i === 0 ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
          />
        ))}
        {/* Contrast overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#0A2B7C] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">{t.common.brand}</p>
        <h1 className="mb-4 bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-[#333333] sm:text-xl drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
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
          <div className="text-xs text-[#666666] mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">{t.hero.secondaryNote}</div>
        </div>
      </div>
    </section>
  );
}
