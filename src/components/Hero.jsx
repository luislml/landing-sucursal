import { motion } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'
import heroImage from '../assets/hero.jpg'

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
                <img
                    src={heroImage}
                    alt="Luxury Building"
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="container mx-auto px-6 relative z-20 md:pt-8">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-2 text-primary mb-6"
                    >
                        <Star size={18} fill="currentColor" />
                        <span className="uppercase tracking-[0.4em] text-xs md:text-sm font-bold">Experiencia de Lujo en el Corazón de la Ciudad</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8"
                    >
                        Tu Próximo <span className="text-primary">Negocio</span> <br />
                        comienza aquí.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
                    >
                        21 Locales exclusivos diseñados para consultoras, bufetes de abogados y boutiques de lujo.
                        Visualiza tu éxito con nuestro tour virtual 360°.
                    </motion.p>



                    {/* Stats */}

                </div>
            </div>

            {/* Floating element */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute right-20 bottom-20 w-64 p-6 glass-card border-primary/20"
            >
                <div className="text-primary mb-2">★★★★★</div>
                <p className="text-sm italic text-white/80">"La mejor inversión que he hecho. El visor 3D me convenció antes de visitar el lugar."</p>
                <p className="text-xs mt-4 font-bold">- Roberto Sánchez</p>
            </motion.div>
        </section>
    )
}

export default Hero
