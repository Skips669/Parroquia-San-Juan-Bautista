import { useState } from 'react'
import { donationApiUrl } from '../data.js'

const initialForm = { name: '', contact: '', product: '', quantity: '', deliveryDate: '' }

export default function DonationForm({ inventory }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function submit(event) {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const response = await fetch(`${donationApiUrl}/api/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          product: form.product,
          quantity: Number(form.quantity),
          deliveryDate: form.deliveryDate,
        }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'No se pudo registrar la donación.')
      setForm(initialForm)
      setStatus({ type: 'success', message: '¡Gracias! Tu ofrecimiento quedó registrado. La parroquia coordinará contigo.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message === 'Failed to fetch' ? 'No pudimos conectar con el servidor. Verifica que la API esté iniciada e inténtalo nuevamente.' : error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="donar" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-800">Cada aporte cuenta</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Quiero colaborar.</h2>
          <p className="mt-4 max-w-md leading-7 text-stone-600">Cuéntanos qué deseas donar y cuándo podrías acercarlo. Nos pondremos en contacto para coordinar.</p>
          <div className="mt-7 rounded-2xl bg-[#efeee7] p-5">
            <p className="text-sm font-semibold text-emerald-950">Tu información es privada.</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">Usaremos tus datos únicamente para coordinar esta donación; no se publicarán en los reportes comunitarios.</p>
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-stone-200 bg-white p-5 sm:grid-cols-2 sm:p-8">
          <label className="grid gap-2 text-sm font-medium text-stone-700">
            Nombre y apellido
            <input required name="name" autoComplete="name" value={form.name} onChange={update} className="rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" placeholder="Tu nombre" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-700">
            Teléfono o correo
            <input required name="contact" autoComplete="email" value={form.contact} onChange={update} className="rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" placeholder="¿Cómo te contactamos?" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-700">
            Producto
            <select required name="product" value={form.product} onChange={update} className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15">
              <option value="" disabled>Selecciona un producto</option>
              {inventory.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
              <option value="Otro producto">Otro producto</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-700">
            Cantidad estimada
            <input required name="quantity" type="number" min="1" step="1" value={form.quantity} onChange={update} className="rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" placeholder="Ej. 5" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-700 sm:col-span-2">
            Fecha estimada de entrega
            <input required name="deliveryDate" type="date" min={minDate} value={form.deliveryDate} onChange={update} className="rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
          </label>
          {status.message && <p role="status" className={`rounded-xl px-4 py-3 text-sm sm:col-span-2 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-800'}`}>{status.message}</p>}
          <button disabled={submitting} className="rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-60 sm:col-span-2">
            {submitting ? 'Enviando…' : 'Registrar mi donación'} <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>
    </section>
  )
}
