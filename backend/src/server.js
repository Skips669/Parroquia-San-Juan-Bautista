import cors from 'cors'
import express from 'express'
import { randomUUID } from 'node:crypto'

const app = express()
const port = Number(process.env.PORT) || 3001
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173')
  .split(',')
  .map((origin) => origin.trim())

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({ limit: '10kb' }))

const inventory = [
  { id: 'arroz', name: 'Arroz', unit: 'kg', stock: 8, minimum: 25, priority: 'Alta' },
  { id: 'leche', name: 'Leche evaporada', unit: 'latas', stock: 12, minimum: 30, priority: 'Alta' },
  { id: 'aceite', name: 'Aceite vegetal', unit: 'botellas', stock: 6, minimum: 20, priority: 'Alta' },
  { id: 'menestras', name: 'Menestras', unit: 'kg', stock: 18, minimum: 20, priority: 'Media' },
]
const donations = []

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.get('/api/inventory', (_request, response) => {
  response.json(inventory)
})

app.patch('/api/inventory/:id', (request, response) => {
  const item = inventory.find(({ id }) => id === request.params.id)
  if (!item) return response.status(404).json({ error: 'Producto no encontrado.' })

  const { stock } = request.body
  if (!Number.isInteger(stock) || stock < 0) {
    return response.status(400).json({ error: 'El stock debe ser un número entero igual o mayor que cero.' })
  }

  item.stock = stock
  response.json(item)
})

app.post('/api/donations', (request, response) => {
  const { name, contact, product, quantity, deliveryDate } = request.body
  if (![name, contact, product, deliveryDate].every((value) => typeof value === 'string' && value.trim())) {
    return response.status(400).json({ error: 'Nombre, contacto, producto y fecha de entrega son obligatorios.' })
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    return response.status(400).json({ error: 'La cantidad debe ser un número entero mayor que cero.' })
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(deliveryDate) || Number.isNaN(Date.parse(`${deliveryDate}T00:00:00`))) {
    return response.status(400).json({ error: 'La fecha de entrega no es válida.' })
  }

  const donation = {
    id: randomUUID(),
    name: name.trim(),
    contact: contact.trim(),
    product: product.trim(),
    quantity,
    deliveryDate,
    createdAt: new Date().toISOString(),
  }
  donations.push(donation)
  response.status(201).json({ id: donation.id, message: 'Donación registrada correctamente.' })
})

app.use((error, _request, response, _next) => {
  if (error instanceof SyntaxError && 'body' in error) {
    return response.status(400).json({ error: 'El cuerpo de la solicitud debe ser JSON válido.' })
  }
  console.error(error)
  response.status(500).json({ error: 'Ocurrió un error interno.' })
})

app.listen(port, () => {
  console.log(`API de la parroquia disponible en http://localhost:${port}`)
})
