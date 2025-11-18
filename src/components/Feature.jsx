import { ShieldCheck, ShoppingCart, Smartphone, Timer } from 'lucide-react';

export function Feature({ icon: Icon, title, body, cta, href = '#apply' }) {
  return (
    <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#111111]">{title}</h3>
      <p className="mb-4 text-[#555555]">{body}</p>
      {cta && (
        <a href={href} className="inline-flex items-center bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text font-semibold text-transparent">
          {cta}
        </a>
      )}
    </div>
  );
}

export function FeaturesGrid({ t }) {
  return (
    <section className="relative w-full bg-white py-16">
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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-3 py-1 text-sm text-white">
                <Timer className="mr-2 h-4 w-4" /> {t.fastLimit.badge}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-[#111111]">{t.fastLimit.title}</h3>
              <p className="text-[#555555]">{t.fastLimit.body}</p>
            </div>
            <a href="#apply" className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-5 py-3 font-semibold text-white transition hover:opacity-90 md:mt-0">
              {t.fastLimit.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
