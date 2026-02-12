import { useEffect, useRef } from 'react'
import { X, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import 'pannellum/build/pannellum.css'

const RoomModal3D = ({ isOpen, onClose, room }) => {
    const viewerRef = useRef(null)

    useEffect(() => {
        if (isOpen && room && window.pannellum) {
            // Small timeout to ensure container is rendered
            const timer = setTimeout(() => {
                window.pannellum.viewer('panorama-viewer', {
                    type: 'equirectangular',
                    panorama: room.panoramaUrl,
                    autoLoad: true,
                    showControls: true,
                })
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isOpen, room])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={onClose} />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-6xl aspect-video glass-card border-white/20 overflow-hidden z-10"
                    >
                        {/* Header info */}
                        <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-20 flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">{room.title} - Tour 360°</h3>
                                <p className="text-white/60 text-sm">Usa el mouse o el tacto para explorar la habitación</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Pannellum Container */}
                        <div id="panorama-viewer" className="w-full h-full bg-dark" />

                        {/* Instructions Overlay (Auto-hide) */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ delay: 3, duration: 1 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center"
                        >
                            <Maximize2 size={40} className="text-white/50 mb-2 animate-pulse" />
                            <span className="text-white/50 text-xs uppercase tracking-widest">Interactúa para moverte</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default RoomModal3D
