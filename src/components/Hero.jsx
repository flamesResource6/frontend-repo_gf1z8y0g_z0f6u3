import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability (do not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.6),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-300/80">Novacard: Your financial freedom, no fees, no strings attached.</p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Discover the Credit Card That Frees You!
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-100/90 sm:text-xl">
          $0 Annual Fee. 5% Cashback. No hidden costs. Your money, your rules.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#apply" className="group inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/40 transition hover:translate-y-[-1px] hover:bg-blue-500">
            Get Your Card Now – In 3 Minutes!
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="text-sm text-blue-100/80">Discover your credit limit instantly.</p>
        </div>
      </div>
    </section>
  );
}
