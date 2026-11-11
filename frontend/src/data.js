export const fallbackInventory = [
  { id: 'arroz', name: 'Arroz', unit: 'kg', stock: 8, minimum: 25, priority: 'Alta' },
  { id: 'leche', name: 'Leche evaporada', unit: 'latas', stock: 12, minimum: 30, priority: 'Alta' },
  { id: 'aceite', name: 'Aceite vegetal', unit: 'botellas', stock: 6, minimum: 20, priority: 'Alta' },
  { id: 'menestras', name: 'Menestras', unit: 'kg', stock: 18, minimum: 20, priority: 'Media' },
]

export const donationApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
