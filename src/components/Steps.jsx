import { Pencil, CreditCard, CheckCircle2 } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: Pencil,
      title: 'Regístrate',
      body: 'Completa nuestro formulario en línea.'
    },
    {
      icon: CreditCard,
      title: 'Conoce tu límite',
      body: 'Descubre tu línea de crédito al instante.'
    },
    {
      icon: CheckCircle2,
      title: 'Usa tu tarjeta',
      body: 'Empieza a disfrutar los beneficios de Novacard.'
    }
  ];

  return (
    <section id="apply" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-3xl font-bold bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text text-transparent">Solicita tu tarjeta en 3 pasos</h2>
        <p className="mb-10 text-center text-[#555555]">Acceder a la libertad financiera nunca fue tan fácil.</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#EEEEEE] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#111111]">{s.title}</h3>
              <p className="text-[#555555]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center rounded-xl bg-black px-6 py-3 font-semibold text-white">
            Obtener Tarjeta
          </a>
        </div>
      </div>
    </section>
  );
}
