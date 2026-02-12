import { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize, Users, Square, Wifi } from 'lucide-react'
import RoomModal3D from './RoomModal3D'

const RoomGallery = ({ floors }) => {
    const [selectedRoom, setSelectedRoom] = useState(null)

    return (
        <section id="habitaciones" className="py-24 bg-dark">
            <div className="container mx-auto px-6">
                <div className="space-y-20">
                    {floors.map((group, groupIndex) => (
                        <div key={group.floor} id={group.floor.toLowerCase().replace(/\s+/g, '-')}>
                            <div className="flex items-center space-x-4 mb-8 pt-24 -mt-24">
                                <span className="text-primary font-serif italic text-2xl font-bold">{group.floor}</span>
                                <div className="h-[1px] flex-grow bg-white/10" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">{group.description}</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.rooms.map((room, index) => (
                                    <motion.div
                                        key={room.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group glass-card hover:glass-card-hover cursor-pointer"
                                    >
                                        <div className="relative aspect-video overflow-hidden border-b border-white/5">
                                            <img
                                                src={room.image}
                                                alt={room.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />

                                            {/* Visual indicator for 3D */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                onClick={() => setSelectedRoom(room)}
                                            >
                                                <div className="btn-360 scale-90 group-hover:scale-100 transform transition-transform duration-500">
                                                    <Maximize size={16} />
                                                    <span className="text-[10px] uppercase tracking-wider font-bold">Tour Virtual 360°</span>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-3 left-4 right-4">
                                                <h3 className="text-sm font-bold tracking-wide text-white/90">{room.title}</h3>
                                            </div>
                                        </div>

                                        <div className="p-4" onClick={() => setSelectedRoom(room)}>
                                            <div className="flex flex-col space-y-3">
                                                <div className="flex items-end justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] text-primary/60 uppercase tracking-widest mb-0.5">Alquiler Mensual</span>
                                                        <span className="text-xl font-serif font-bold text-primary leading-tight">{room.price}</span>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Estado</span>
                                                        <span className={`text-sm font-bold ${room.status === 'Disponible' ? 'text-green-400' :
                                                            room.status === 'Alquilado' ? 'text-red-400' :
                                                                'text-yellow-400'
                                                            }`}>
                                                            {room.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40 tracking-wider">
                                                    <div className="flex items-center space-x-2">
                                                        <Square size={10} className="text-primary/40" />
                                                        <span>DIMENSIONES: {room.specs.size}</span>
                                                    </div>
                                                    <span className="text-primary/60 font-bold group-hover:text-primary transition-colors">EXPLORAR →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <RoomModal3D
                isOpen={!!selectedRoom}
                onClose={() => setSelectedRoom(null)}
                room={selectedRoom}
            />
        </section>
    )
}

export default RoomGallery
