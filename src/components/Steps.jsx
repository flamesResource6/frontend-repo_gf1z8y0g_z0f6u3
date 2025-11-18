import { Pencil, CreditCard, CheckCircle2 } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: Pencil,
      title: 'Register',
      body: 'Complete our quick online form.'
    },
    {
      icon: CreditCard,
      title: 'Know Your Limit',
      body: 'Discover your assigned credit line instantly.'
    },
    {
      icon: CheckCircle2,
      title: 'Use Your Card',
      body: 'Start enjoying the benefits of Novacard.'
    }
  ];

  return (
    <section id="apply" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-3xl font-bold text-white">Apply for Your Card in 3 Simple Steps.</h2>
        <p className="mb-10 text-center text-blue-200/90">Accessing financial freedom has never been easier.</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 text-center shadow-lg backdrop-blur-sm">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-blue-200/90">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400/40 transition hover:bg-blue-500">
            Start My Application!
          </a>
        </div>
      </div>
    </section>
  );
}
