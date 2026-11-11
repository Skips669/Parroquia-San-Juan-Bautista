const details = [
  { label: 'Dirección', value: 'Los Amautas 565, Zárate, San Juan de Lurigancho', icon: '⌖' },
  { label: 'Teléfono', value: '(01) 579 9167', icon: '◉', href: 'tel:+5115799167' },
  { label: 'Atención parroquial', value: 'Lunes a sábado · 9:00 a. m. – 1:00 p. m.', icon: '◷' },
  { label: 'Celebración de misas', value: 'Domingos · 8:00 a. m. y 6:00 p. m.', icon: '✳' },
]

export default function ParishInfo() {
  return (
    <section id="parroquia" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Nuestra casa</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Aquí nos encontramos.</h2>
          <p className="mt-4 max-w-md leading-7 text-stone-600">Acércate para conversar, participar de la comunidad o coordinar tu colaboración.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {details.map(({ label, value, icon, href }) => (
            <div key={label} className="rounded-2xl border border-stone-200 bg-white p-5">
              <span className="text-xl text-emerald-800" aria-hidden="true">{icon}</span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">{label}</p>
              {href ? <a href={href} className="mt-1 block font-semibold text-emerald-950 hover:underline">{value}</a> : <p className="mt-1 font-semibold text-emerald-950">{value}</p>}
            </div>
          ))}
          <p className="sm:col-span-2 text-xs text-stone-500">Horarios referenciales de este MVP. Confirma cambios por teléfono antes de visitarnos.</p>
        </div>
      </div>
    </section>
  )
}
