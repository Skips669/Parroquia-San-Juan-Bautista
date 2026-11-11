export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="absolute -right-20 -top-32 size-96 rounded-full border border-white/10" />
      <div className="absolute -right-4 -top-16 size-64 rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div className="relative">
          <p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-emerald-200">Fe y servicio en comunidad</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Una comunidad que <span className="font-serif italic text-emerald-200">comparte</span> esperanza.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-emerald-50/80 sm:text-lg">
            Sumemos manos y corazones para acompañar a las familias de Zárate. Cada aporte, por pequeño que sea, puede hacer la diferencia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#donar" className="rounded-full bg-[#e6c58e] px-6 py-3 font-semibold text-emerald-950 transition hover:bg-[#f1d7a8]">Hacer una donación <span aria-hidden="true">↗</span></a>
            <a href="#jornadas" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Conocer las jornadas</a>
          </div>
        </div>
        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
          <span className="text-4xl text-emerald-200" aria-hidden="true">“</span>
          <blockquote className="mt-2 font-serif text-2xl leading-relaxed sm:text-3xl">
            El bien que hacemos juntos llega más lejos.
          </blockquote>
          <p className="mt-6 text-sm text-emerald-100/70">Acompañamiento, solidaridad y encuentro.</p>
          <div className="mt-8 border-t border-white/15 pt-5 text-xs font-semibold uppercase tracking-[.16em] text-emerald-200">Parroquia San Juan Bautista · Zárate</div>
        </div>
      </div>
    </section>
  )
}
