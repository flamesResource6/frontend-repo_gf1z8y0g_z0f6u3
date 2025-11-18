import { Pencil, CreditCard, CheckCircle2 } from 'lucide-react';

export default function Steps({ t }) {
  return (
    <section id="apply" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-3xl font-bold bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text text-transparent">{t.steps.heading}</h2>
        <p className="mb-10 text-center text-[#555555]">{t.steps.sub}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.steps.items.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#EEEEEE] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white">
                {i === 0 && <Pencil className="h-6 w-6" />}
                {i === 1 && <CreditCard className="h-6 w-6" />}
                {i === 2 && <CheckCircle2 className="h-6 w-6" />}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#111111]">{s.title}</h3>
              <p className="text-[#555555]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center rounded-xl bg-black px-6 py-3 font-semibold text-white">
            {t.steps.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
