import { ShieldCheck, ShoppingCart, Smartphone, Timer } from 'lucide-react';
import NoiseCard from './NoiseCard';
import React from 'react';

export function Feature({ icon: Icon, title, body, cta, href = '#apply' }) {
  return (
    <NoiseCard className="p-6 transition hover:shadow-[0_18px_40px_rgba(111,0,255,0.12)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white shadow ring-1 ring-fuchsia-300/40">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#111111]">{title}</h3>
      <p className="mb-4 text-[#555555]">{body}</p>
      {cta && (
        <a href={href} className="inline-flex items-center bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text font-semibold text-transparent">
          {cta}
        </a>
      )}
    </NoiseCard>
  );
}

export function FeaturesGrid({ t }) {
  return (
    <section className="relative w-full bg-white py-16">
      {/* soft angled stripes background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #8a2be2, #8a2be2 1px, transparent 1px, transparent 16px)'
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Feature
            icon={ShieldCheck}
            title={t.features.one.title}
            body={t.features.one.body}
            cta={t.features.one.cta}
          />
          <Feature
            icon={ShoppingCart}
            title={t.features.two.title}
            body={t.features.two.body}
            cta={t.features.two.cta}
          />
          <Feature
            icon={Smartphone}
            title={t.features.three.title}
            body={t.features.three.body}
            cta={t.features.three.cta}
          />
        </div>
      </div>
    </section>
  );
}

export function FastLimit({ t }) {
  return (
    <section className="relative bg-white py-16">
      {/* subtle radial highlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,#6F00FF0D,transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <NoiseCard className="p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-3 py-1 text-sm text-white shadow">
                <Timer className="mr-2 h-4 w-4" /> {t.fastLimit.badge}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#111111]">{t.fastLimit.title}</h3>
              <p className="text-[#555555]">{t.fastLimit.body}</p>
            </div>
            <a href="#apply" className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-5 py-3 font-semibold text-white transition hover:opacity-90 md:mt-0 shadow ring-1 ring-fuchsia-300/40">
              {t.fastLimit.cta}
            </a>
          </div>
        </NoiseCard>
      </div>
    </section>
  );
}
