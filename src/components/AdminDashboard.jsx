import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    LogOut,
    Save,
    Image as ImageIcon,
    DollarSign,
    CheckCircle,
    AlertCircle,
    Edit3,
    X,
    Plus
} from 'lucide-react'

const AdminDashboard = ({ floors, onUpdateFloors, onLogout }) => {
    const [editingRoom, setEditingRoom] = useState(null)
    const [formData, setFormData] = useState(null)

    const handleEditClick = (floorId, room) => {
        setEditingRoom({ floorId, ...room })
        setFormData({ ...room })
    }

    const handleSave = () => {
        const updatedFloors = floors.map(floor => {
            if (floor.id === editingRoom.floorId) {
                return {
                    ...floor,
                    rooms: floor.rooms.map(room =>
                        room.id === editingRoom.id ? { ...room, ...formData } : room
                    )
                }
            }
            return floor
        })

        onUpdateFloors(updatedFloors)
        setEditingRoom(null)
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Disponible': return 'text-green-400 bg-green-400/10'
            case 'Alquilado': return 'text-red-400 bg-red-400/10'
            case 'Mantenimiento': return 'text-yellow-400 bg-yellow-400/10'
            default: return 'text-white/40'
        }
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Header Admin */}
            <header className="border-b border-white/5 bg-dark py-6 sticky top-0 z-40 backdrop-blur-xl">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold text-xl">A</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-serif font-bold">Panel <span className="text-primary">Administrativo</span></h1>
                            <p className="text-[10px] uppercase tracking-widest text-white/40 uppercase">Luxury Suites Control</p>
                        </div>
                    </div>

                    <button
                        onClick={onLogout}
                        className="flex items-center space-x-2 text-white/40 hover:text-red-400 transition-colors py-2 px-4 border border-white/5 hover:border-red-400/20 rounded-xl"
                    >
                        <LogOut size={18} />
                        <span className="text-sm font-bold uppercase tracking-widest">Cerrar Sesión</span>
                    </button>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="space-y-12">
                    {floors.map((floor) => (
                        <div key={floor.id} className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-2xl font-serif font-bold text-primary italic">{floor.floor}</h2>
                                <div className="h-[1px] flex-grow bg-white/5" />
                                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">{floor.rooms.length} UNIDADES</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {floor.rooms.map((room) => (
                                    <motion.div
                                        key={room.id}
                                        layoutId={`room-${room.id}`}
                                        className="glass-card overflow-hidden border-white/5 hover:border-primary/20 transition-all p-4 group"
                                    >
                                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                                            <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                                            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${getStatusColor(room.status)}`}>
                                                {room.status}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-white/90">{room.title}</h3>
                                                    <p className="text-xs text-white/40 uppercase tracking-widest">{room.specs.area}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-serif font-bold text-primary">{room.price}</p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleEditClick(floor.id, room)}
                                                className="w-full py-3 bg-white/5 hover:bg-primary hover:text-black rounded-xl border border-white/5 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:border-primary/50"
                                            >
                                                <Edit3 size={16} />
                                                <span className="text-xs font-bold uppercase tracking-widest">Editar Local</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Editor Modal */}
            <AnimatePresence>
                {editingRoom && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setEditingRoom(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-dark border border-white/10 p-8 rounded-3xl w-full max-w-xl relative z-10 shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-2xl font-serif font-bold italic">Edición de <span className="text-primary">Local</span></h2>
                                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{editingRoom.title}</p>
                                </div>
                                <button onClick={() => setEditingRoom(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Title */}
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Título del Local</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {/* Price */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1 flex items-center">
                                            <DollarSign size={10} className="mr-1" /> Precio Mensual
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors text-primary font-bold"
                                        />
                                    </div>

                                    {/* Status */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Estado Actual</label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option className="bg-dark">Disponible</option>
                                            <option className="bg-dark">Alquilado</option>
                                            <option className="bg-dark">Mantenimiento</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Image URL */}
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1 flex items-center">
                                        <ImageIcon size={10} className="mr-1" /> URL de la Imagen
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors text-xs"
                                    />
                                    <p className="text-[9px] text-white/20 italic ml-1">* Recomendado: Unsplash o URL directa de alta calidad.</p>
                                </div>

                                <div className="pt-4 flex space-x-4">
                                    <button
                                        onClick={handleSave}
                                        className="flex-grow btn-gold flex items-center justify-center space-x-3 h-14"
                                    >
                                        <Save size={20} />
                                        <span>Guardar Cambios</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AdminDashboard
