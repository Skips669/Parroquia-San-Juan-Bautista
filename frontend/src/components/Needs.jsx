export default function Needs({ inventory, loading, error }) {
  const priorities = inventory.filter((item) => item.stock < item.minimum)

  return (
    <section id="necesitamos" className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-200">Inventario prioritario</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">¿Qué necesitamos?</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-emerald-50/70">Actualizamos esta lista según el stock disponible. Gracias por ayudarnos a cubrir lo más urgente.</p>
        </div>
        {error && <p role="status" className="mt-5 rounded-xl border border-amber-200/30 bg-amber-100/10 px-4 py-3 text-sm text-amber-100">{error}</p>}
        {loading ? <p className="mt-8 text-emerald-100/80">Consultando inventario…</p> : priorities.length === 0 ? (
          <p className="mt-8 rounded-xl bg-white/10 p-5 text-emerald-50">Por ahora no hay productos bajo el nivel mínimo.</p>
        ) : (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {priorities.map((item) => (
              <article key={item.id} className="rounded-2xl border border-white/15 bg-white/[.06] p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-[#e6c58e] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-950">{item.priority}</span>
                </div>
                <p className="mt-6 text-sm text-emerald-100/70">Disponible</p>
                <p className="mt-1 text-2xl font-semibold">{item.stock} <span className="text-sm font-normal text-emerald-100/70">{item.unit}</span></p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full rounded-full bg-[#e6c58e]" style={{ width: `${Math.min(100, (item.stock / item.minimum) * 100)}%` }} />
                </div>
                <p className="mt-2 text-xs text-emerald-100/60">Meta: {item.minimum} {item.unit}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
