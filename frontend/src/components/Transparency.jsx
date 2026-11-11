const reports = [
  { period: 'Jornada de octubre', date: '12 oct 2026', received: '186 kg', delivered: '172 kg', people: '64 personas' },
  { period: 'Jornada de septiembre', date: '14 sep 2026', received: '143 kg', delivered: '138 kg', people: '51 personas' },
]

export default function Transparency() {
  return (
    <section id="transparencia" className="bg-[#efeee7]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Cuentas claras, comunidad fuerte</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Lo que logramos juntos.</h2>
            <p className="mt-4 max-w-md leading-7 text-stone-600">Compartimos resultados agregados de cada jornada. Cuidamos la privacidad de las familias y de quienes donan.</p>
          </div>
          <div className="grid gap-3">
            {reports.map((report) => (
              <article key={report.period} className="rounded-2xl bg-white p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-emerald-950">{report.period}</h3>
                  <span className="text-xs text-stone-500">{report.date} · datos de ejemplo</span>
                </div>
                <dl className="mt-5 grid grid-cols-3 gap-3">
                  {[['Recibido', report.received], ['Entregado', report.delivered], ['Atendidas', report.people]].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs text-stone-500">{label}</dt>
                      <dd className="mt-1 text-lg font-semibold text-emerald-900 sm:text-xl">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
            <p className="text-xs text-stone-500">Reportes demostrativos: reemplazar por cifras verificadas antes de publicar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
