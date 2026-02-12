import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contacto" className="py-24 bg-dark relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                            Agenda una <span className="text-primary italic">Visita</span>
                        </h2>
                        <p className="text-white/50 text-lg mb-12 leading-relaxed max-w-md">
                            Estamos aquí para ayudarte a encontrar el espacio ideal para tu negocio. Contáctanos y descubre por qué somos la mejor opción en la zona.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                                    <Phone className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Teléfono Directo</h4>
                                    <p className="text-xl font-serif">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                                    <Mail className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Email Corporativo</h4>
                                    <p className="text-xl font-serif">ventas@luxurysuites.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                                    <MapPin className="text-primary" size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">Ubicación</h4>
                                    <p className="text-xl font-serif">Av. Empresarial 123, Distrito Financiero</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 border-primary/10 relative"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Ej. Roberto Sánchez"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Asunto de Interés</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer">
                                    <option className="bg-dark">Visita Técnica</option>
                                    <option className="bg-dark">Cotización de Alquiler</option>
                                    <option className="bg-dark">Consultoría de Espacios</option>
                                    <option className="bg-dark">Otros</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Mensaje</label>
                                <textarea
                                    rows="4"
                                    placeholder="Cuéntanos más sobre tus necesidades..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button className="btn-gold w-full flex items-center justify-center space-x-3 group">
                                <Send size={18} className="group-hover:-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                <span>Enviar Mensaje</span>
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Contact
