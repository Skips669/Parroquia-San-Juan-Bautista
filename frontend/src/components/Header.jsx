const links = [
  ['Parroquia', '#parroquia'],
  ['Jornadas', '#jornadas'],
  ['Donar', '#donar'],
  ['Transparencia', '#transparencia'],
  ['Talleres', '#talleres'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-950/10 bg-[#f8f7f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="grid size-10 place-items-center rounded-full bg-emerald-900 text-lg text-white">✳</span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-emerald-950">SAN JUAN BAUTISTA</span>
            <span className="text-xs text-stone-600">Zárate · Comunidad que acompaña</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-stone-700 transition hover:text-emerald-800">
              {label}
            </a>
          ))}
          <a href="#donar" className="rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Quiero ayudar
          </a>
        </nav>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-emerald-950/15 px-3 py-2 text-sm font-semibold text-emerald-950">
            Menú <span aria-hidden="true">☰</span>
          </summary>
          <nav className="absolute right-0 top-12 grid w-52 gap-1 rounded-xl border border-stone-200 bg-white p-2 shadow-xl" aria-label="Navegación móvil">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={(event) => event.currentTarget.closest('details').open = false} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-emerald-50">
                {label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
