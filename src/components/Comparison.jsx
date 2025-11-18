export default function Comparison() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] bg-clip-text text-transparent">¿Por qué elegir Novacard?</h2>
        <div className="overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 bg-[#FAFAFA] text-sm font-semibold text-[#333333]">
            <div className="p-4 text-center">Novacard</div>
            <div className="p-4 text-center">Tarjetas tradicionales</div>
          </div>
          <div className="divide-y divide-[#EEEEEE]">
            {[
              { label: 'Anualidad', left: '$0', right: 'Sí' },
              { label: 'Cashback', left: '5% Súper / 0.5% resto', right: 'Puntos o bajo' },
              { label: 'Cargos ocultos', left: 'No', right: 'Sí' },
              { label: 'Proceso de solicitud', left: '3 minutos', right: 'Largo y complejo' },
              { label: 'Gestión en app', left: 'Completa', right: 'Limitada' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-4 text-[#555555] md:border-r md:border-[#EEEEEE]">{row.label}</div>
                <div className="p-4 text-[#111111] md:border-r md:border-[#EEEEEE]">{row.left}</div>
                <div className="p-4 text-[#555555]">{row.right}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="#apply" className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#FF33CC] to-[#6F00FF] px-6 py-3 font-semibold text-white transition hover:opacity-90">
            Cambiarme a Novacard
          </a>
        </div>
      </div>
    </section>
  );
}
