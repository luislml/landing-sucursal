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
                    className="flex items-center space-x-2 text-white/40 hover:text-primary transition-colors mb-6 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Inicio</span>
                </button>

                <div className="glass-card p-8 border-primary/20 shadow-2xl">
                    <div className="text-center mb-10">
                        <div className="relative inline-block mb-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-xl shadow-primary/10">
                                <Lock className="text-primary" size={28} />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-4 border-[#0A0A0A]">
                                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-serif font-bold mb-2 tracking-tight">Acceso <span className="text-primary italic">Admin</span></h2>
                        <div className="h-[1px] w-8 bg-primary/30 mx-auto mb-4" />
                        <p className="text-white/40 text-[10px] max-w-[220px] mx-auto leading-relaxed">Gestión de unidades y disponibilidad.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Usuario</label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                <input
                                    type="text"
                                    required
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    placeholder="admin"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[9px] uppercase tracking-widest text-white/40 font-bold ml-1">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                                <input
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    placeholder="••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-[9px] font-bold text-center"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="btn-gold w-full flex items-center justify-center space-x-2 group py-3.5 h-auto text-sm"
                        >
                            <span>Entrar</span>
                            <LogIn size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <p className="text-center mt-6 text-white/10 text-[9px] tracking-[0.3em] uppercase">
                    LS System v1.1
                </p>
            </motion.div>
        </div>
    )
}

export default Login
