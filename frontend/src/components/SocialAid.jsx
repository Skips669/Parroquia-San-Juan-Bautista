const events = [
  { date: '21', month: 'NOV', title: 'Jornada de alimentos', zone: 'Zárate · alrededores de la parroquia', time: 'Sábado · 9:00 a. m. – 1:00 p. m.' },
  { date: '05', month: 'DIC', title: 'Encuentro solidario', zone: 'Bayóvar · punto comunitario', time: 'Sábado · 9:00 a. m. – 1:00 p. m.' },
  { date: '19', month: 'DIC', title: 'Canastas de esperanza', zone: 'Zárate · sector parroquial', time: 'Sábado · 9:00 a. m. – 1:00 p. m.' },
]

export default function SocialAid() {
  return (
    <section id="jornadas" className="bg-[#efeee7]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Nos organizamos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Próximas jornadas.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-600">Fechas y zonas referenciales para el prototipo. La parroquia confirmará cada jornada y punto de atención.</p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {events.map((event) => (
            <article key={event.date + event.title} className="flex gap-5 rounded-2xl bg-white p-5 sm:p-6">
              <div className="grid h-fit min-w-16 place-items-center rounded-xl bg-emerald-50 px-3 py-2 text-emerald-900">
                <span className="text-2xl font-bold leading-none">{event.date}</span>
                <span className="mt-1 text-[10px] font-bold tracking-[.15em]">{event.month}</span>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-950">{event.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{event.zone}</p>
                <p className="mt-3 text-xs font-semibold text-emerald-800">{event.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
