const points = [
  { name: 'Secretaría parroquial', address: 'Los Amautas 565, Zárate', hours: 'Lun. a sáb. · 9:00 a. m. – 1:00 p. m.' },
  { name: 'Recepción de jornadas', address: 'Atrio de la parroquia', hours: 'Días de jornada · 8:30 a. m. – 1:00 p. m.' },
]

export default function CollectionPoints() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Tu ayuda, cerca</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Puntos de acopio.</h2>
          <p className="mt-4 max-w-md leading-7 text-stone-600">Recibimos productos limpios, sellados y dentro de su fecha de vencimiento.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <article key={point.name} className="rounded-2xl border border-stone-200 p-6">
              <span className="grid size-10 place-items-center rounded-full bg-emerald-50 text-emerald-900" aria-hidden="true">⌖</span>
              <h3 className="mt-5 font-semibold text-emerald-950">{point.name}</h3>
              <p className="mt-2 text-sm text-stone-600">{point.address}</p>
              <p className="mt-3 text-sm font-medium text-emerald-800">{point.hours}</p>
            </article>
          ))}
          <p className="sm:col-span-2 text-xs text-stone-500">Direcciones y horarios referenciales; confirmar disponibilidad con la parroquia.</p>
        </div>
      </div>
    </section>
  )
}
