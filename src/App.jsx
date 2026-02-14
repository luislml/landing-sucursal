import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RoomGallery from './components/RoomGallery'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

const INITIAL_DATA = [
  {
    floor: 'Planta Baja',
    id: 'planta-baja',
    description: 'Habitaciones disponibles.',
    rooms: [
      {
        id: 1,
        title: 'Local PB-01 - Flagship',
        price: '$2,500',
        status: 'Disponible',
        image: '/360/1.png',
        panoramaUrl: '/360/1.png',
        specs: { size: '12m x 15m', area: '180m²', type: 'Retail / Showroom' }
      },
      {
        id: 2,
        title: 'Local PB-02 - Boutique',
        price: '$1,800',
        status: 'Mantenimiento',
        image: '/360/2.png',
        panoramaUrl: '/360/2.png',
        specs: { size: '8m x 10m', area: '80m²', type: 'Moda / Accesorios' }
      }
    ]
  },
  {
    floor: 'Piso 1',
    id: 'piso-1',
    description: 'Habitaciones disponibles.',
    rooms: [
      {
        id: 3,
        title: 'Oficina 101 - Consultoría',
        price: '$1,200',
        status: 'Disponible',
        image: '/360/3.png',
        panoramaUrl: '/360/3.png',
        specs: { size: '6m x 10m', area: '60m²', type: 'Bufete / Agencia' }
      },
      {
        id: 4,
        title: 'Oficina 102 - Studio',
        price: '$950',
        status: 'Alquilado',
        image: '/360/4.png',
        panoramaUrl: '/360/4.png',
        specs: { size: '5m x 7m', area: '35m²', type: 'Administrativo' }
      }
    ]
  },
  {
    floor: 'Piso 2',
    id: 'piso-2',
    description: 'Habitaciones disponibles.',
    rooms: [
      {
        id: 5,
        title: 'Suite 201 - Executive',
        price: '$1,500',
        status: 'Disponible',
        image: '/360/5.png',
        panoramaUrl: '/360/5.png',
        specs: { size: '8m x 12m', area: '96m²', type: 'Corporativo' }
      }
    ]
  }
]

import Login from './components/Login'
import AdminPanel from './components/AdminDashboard'

function App() {
  const [floors, setFloors] = useState(INITIAL_DATA)

  const [view, setView] = useState('landing') // 'landing', 'login', 'admin'

  // Load Pannellum script dynamically to ensure it's available for the 3D viewer
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css'
    document.head.appendChild(link)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  if (view === 'login') return (
    <Login
      onLogin={() => setView('admin')}
      onBack={() => setView('landing')}
    />
  )
  if (view === 'admin') return (
    <AdminPanel
      floors={floors}
      onUpdateFloors={setFloors}
      onLogout={() => setView('landing')}
    />
  )

  return (
    <main className="bg-dark min-h-screen selection:bg-primary selection:text-black">
      <Navbar onAdminClick={() => setView('login')} />
      <Hero />
      <RoomGallery floors={floors} />
      <Contact />

      <footer className="py-12 border-t border-white/10 bg-dark text-center">
        <div className="container mx-auto px-6">
          <p className="text-white/40 text-sm">© 2026 LUXURY SUITES. Todos los derechos reservados.</p>
          <p className="text-primary mt-4 font-serif text-xl">Tu próximo nivel de vida.</p>
        </div>
      </footer>

      {/* Hidden admin trigger for demo */}
      <div
        className="fixed bottom-4 left-4 w-8 h-8 opacity-0 hover:opacity-10 transition-opacity cursor-pointer z-[100]"
        onClick={() => setView('login')}
      />
    </main>
  )
}

export default App
