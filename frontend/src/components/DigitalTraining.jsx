const sessions = [
  { date: '19 NOV', title: 'Primeros pasos con el celular', detail: 'Jueves · 5:30 p. m. · Salón parroquial' },
  { date: '26 NOV', title: 'WhatsApp y comunicación segura', detail: 'Jueves · 5:30 p. m. · Salón parroquial' },
  { date: '03 DIC', title: 'Trámites y servicios en línea', detail: 'Jueves · 5:30 p. m. · Salón parroquial' },
]

export default function DigitalTraining() {
  return (
    <section id="talleres" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Aprendemos en comunidad</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Capacitación digital.</h2>
          <p className="mt-4 max-w-md leading-7 text-stone-600">Talleres prácticos y gratuitos para usar la tecnología con confianza. Trae tu celular y tus preguntas.</p>
          <a href="/material-guia-taller-digital.txt" download className="mt-6 inline-flex rounded-full border border-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50">
            Descargar guía del taller <span className="ml-2" aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white px-5 sm:px-7">
          {sessions.map((session) => (
            <article key={session.title} className="flex gap-5 py-5">
              <span className="grid h-fit min-w-16 place-items-center rounded-xl bg-emerald-50 px-2 py-3 text-xs font-bold tracking-wide text-emerald-900">{session.date}</span>
              <div>
                <h3 className="font-semibold text-emerald-950">{session.title}</h3>
                <p className="mt-1.5 text-sm text-stone-600">{session.detail}</p>
              </div>
            </article>
          ))}
          <p className="pb-5 text-xs text-stone-500">Cronograma de demostración; confirmar fechas y cupos con la secretaría.</p>
        </div>
      </div>
    </section>
  )
}
