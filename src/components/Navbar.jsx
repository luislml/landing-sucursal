import { useState, useEffect } from 'react'
import { Menu, X, Home, Bed, Info, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onAdminClick }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const floorGroups = [
        { name: 'Planta Baja', id: 'planta-baja' },
        { name: 'Piso 1', id: 'piso-1' },
        { name: 'Piso 2', id: 'piso-2' },
    ]

    const navItems = [
        { name: 'Inicio', icon: <Home size={18} />, href: '#' },
        {
            name: 'Locales',
            icon: <Bed size={18} />,
            href: '#Locales',
            dropdown: floorGroups
        },
        { name: 'Contacto', icon: <Phone size={18} />, href: '#contacto' },
    ]

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2"
                >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-xl">L</span>
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight">LUXURY<span className="text-primary">SUITES</span></span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative group lg:block"
                            onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                            onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
                        >
                            <motion.a
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="nav-link flex items-center space-x-2 py-2"
                            >
                                <span>{item.name}</span>
                                {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                            </motion.a>

                            {item.dropdown && (
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 w-48 bg-dark-lighter border border-white/10 rounded-xl mt-2 p-2 shadow-2xl backdrop-blur-xl"
                                        >
                                            {item.dropdown.map((floor) => (
                                                <a
                                                    key={floor.id}
                                                    href={`#${floor.id}`}
                                                    className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                                                >
                                                    {floor.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    <motion.button
                        onClick={onAdminClick}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="btn-gold !py-2 !px-5 text-[10px] tracking-[0.2em] uppercase font-bold"
                    >
                        Panel Admin
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-lighter border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col space-y-2">
                                    <a
                                        href={item.href}
                                        onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                                        className="flex justify-between items-center text-xl nav-link"
                                    >
                                        <div className="flex items-center space-x-4">
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </div>
                                    </a>
                                    {item.dropdown && (
                                        <div className="pl-12 flex flex-col space-y-2 border-l border-white/5">
                                            {item.dropdown.map((floor) => (
                                                <a
                                                    key={floor.id}
                                                    href={`#${floor.id}`}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
                                                >
                                                    {floor.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <motion.button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onAdminClick();
                                }}
                                className="btn-gold !py-4 w-full text-xs tracking-[0.2em] font-bold uppercase mt-4"
                            >
                                Panel Administrativo
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
