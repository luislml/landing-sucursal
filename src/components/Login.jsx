import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, User, LogIn, ArrowLeft } from 'lucide-react'

const Login = ({ onLogin, onBack }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock authentication
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            onLogin()
        } else {
            setError('Credenciales incorrectas. Intenta con admin/admin')
        }
    }

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <button
                    onClick={onBack}
                    className="flex items-center space-x-2 text-white/40 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest">Volver al Inicio</span>
                </button>

                <div className="glass-card p-10 border-primary/20 shadow-2xl">
                    <div className="text-center mb-16">
                        <div className="relative inline-block mb-10">
                            <div className="w-24 h-24 bg-primary/10 rounded-[32px] flex items-center justify-center border border-primary/20 shadow-xl shadow-primary/10">
                                <Lock className="text-primary" size={42} />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-[6px] border-[#0A0A0A]">
                                <div className="w-2 h-2 bg-black rounded-full" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">Acceso <span className="text-primary italic">Admin</span></h2>
                        <div className="h-[1px] w-12 bg-primary/30 mx-auto mb-6" />
                        <p className="text-white/40 text-sm max-w-[280px] mx-auto leading-relaxed">Control centralizado de unidades, tarifas y disponibilidad del complejo.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Usuario</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    placeholder="Nombre de usuario"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-xs font-bold text-center"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="btn-gold w-full flex items-center justify-center space-x-3 group py-4 h-auto text-lg"
                        >
                            <span>Iniciar Sesión</span>
                            <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <p className="text-center mt-8 text-white/20 text-xs tracking-widest uppercase">
                    Luxury Suites Management System v1.0
                </p>
            </motion.div>
        </div>
    )
}

export default Login
