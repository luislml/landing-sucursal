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
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=60&w=600',
        panoramaUrl: '/360/1.png',
        specs: { size: '12m x 15m', area: '180m²', type: 'Retail / Showroom' }
      },
      {
        id: 2,
        title: 'Local PB-02 - Boutique',
        price: '$1,800',
        status: 'Mantenimiento',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=60&w=600',
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
        image: 'https://images.unsplash.com/photo-1582653280643-e77c738edec1?auto=format&fit=crop&q=60&w=600',
        panoramaUrl: '/360/3.png',
        specs: { size: '6m x 10m', area: '60m²', type: 'Bufete / Agencia' }
      },
      {
        id: 4,
        title: 'Oficina 102 - Studio',
        price: '$950',
        status: 'Alquilado',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=60&w=600',
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
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=60&w=600',
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
