export default function Comparison() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Why Choose Novacard?</h2>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          <div className="grid grid-cols-2 bg-slate-900/80 text-sm font-semibold text-blue-200">
            <div className="p-4 text-center">Novacard</div>
            <div className="p-4 text-center">Traditional Cards</div>
          </div>
          <div className="divide-y divide-white/10">
            {[
              { label: 'Annual Fee', left: '$0', right: 'Yes' },
              { label: 'Cashback', left: '5% Supermarket', right: 'Points or Low' },
              { label: 'Hidden Fees', left: 'No', right: 'Yes' },
              { label: 'Application Process', left: '3 Minutes', right: 'Long and Complex' },
              { label: 'App Management', left: 'Full', right: 'Limited' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-4 text-blue-200/90 md:border-r md:border-white/10">{row.label}</div>
                <div className="p-4 text-white md:border-r md:border-white/10">{row.left}</div>
                <div className="p-4 text-blue-200/90">{row.right}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="#apply" className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400/40 transition hover:bg-blue-500">
            Make the Switch to Novacard
          </a>
        </div>
      </div>
    </section>
  );
}
