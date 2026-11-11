import { useEffect, useState } from 'react'
import CollectionPoints from './components/CollectionPoints.jsx'
import DigitalTraining from './components/DigitalTraining.jsx'
import DonationForm from './components/DonationForm.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Needs from './components/Needs.jsx'
import ParishInfo from './components/ParishInfo.jsx'
import SocialAid from './components/SocialAid.jsx'
import Transparency from './components/Transparency.jsx'
import { donationApiUrl, fallbackInventory } from './data.js'

export default function App() {
  const [inventory, setInventory] = useState(fallbackInventory)
  const [loading, setLoading] = useState(true)
  const [inventoryError, setInventoryError] = useState('')

  useEffect(() => {
    let active = true
    fetch(`${donationApiUrl}/api/inventory`)
      .then(async (response) => {
        const result = await response.json()
        if (!response.ok) throw new Error(result.error || 'No se pudo consultar el inventario.')
        if (active) setInventory(result)
      })
      .catch(() => {
        if (active) setInventoryError('Mostramos el inventario de ejemplo; no se pudo conectar con la API.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ParishInfo />
        <SocialAid />
        <CollectionPoints />
        <Needs inventory={inventory} loading={loading} error={inventoryError} />
        <DonationForm inventory={inventory} />
        <Transparency />
        <DigitalTraining />
      </main>
      <footer className="bg-emerald-950 px-5 py-8 text-center text-sm text-emerald-50/70">
        <p className="font-semibold text-white">Parroquia San Juan Bautista · Zárate</p>
        <p className="mt-2">Los Amautas 565, San Juan de Lurigancho · (01) 579 9167</p>
        <p className="mt-4 text-xs">Una comunidad de fe, servicio y esperanza.</p>
      </footer>
    </>
  )
}
