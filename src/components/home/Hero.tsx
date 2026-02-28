import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
    return (
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            <Star className="w-4 h-4 fill-primary" />
                            <span>Clínica número uno en atención humana</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Alivia tu dolor con un trato verdaderamente <span className="text-primary">humano</span>
                        </h1>

                        <p className="text-xl text-foreground/80 leading-relaxed max-w-xl">
                            En Quiero Quiropráctica combinamos la precisión de la ciencia con el espíritu y la calidez oaxaqueña para devolverte la movilidad y la alegría de vivir sin dolor.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <Button size="lg" className="shadow-xl shadow-primary/25 group text-lg">
                                Agendar mi Cita
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg bg-white/50 backdrop-blur-sm">
                                Conocer el Método
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-4 text-sm text-foreground/60 font-medium">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-accent/20 flex items-center justify-center text-xs">
                                        👤
                                    </div>
                                ))}
                            </div>
                            <p>+2,000 pacientes han recuperado su bienestar</p>
                        </div>
                    </motion.div>

                    {/* Image placeholder with abstract warm shapes */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-[3rem] transform rotate-3 scale-105"></div>
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem] overflow-hidden flex items-center justify-center">
                            {/* Aquí irá una fotografía real posteriormente */}
                            <div className="text-center p-8">
                                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-12 h-12 text-primary fill-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Tu salud en las mejores manos</h3>
                                <p className="text-foreground/70 mt-2">[Espacio para fotografía de la clínica]</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

import { Heart } from 'lucide-react';
