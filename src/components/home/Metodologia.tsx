import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Metodologia() {
    const benefits = [
        "Trato personalizado y humano",
        "Instalaciones que se sienten como en casa",
        "Acompañamiento continuo en tu progreso",
        "Profesionales altamente capacitados"
    ]

    return (
        <section id="metodologia" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Oaxacan inspired shapes */}
                        <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] transform -rotate-2"></div>
                        <div className="bg-white p-12 rounded-[2rem] shadow-xl relative border border-primary/5">
                            <h3 className="text-3xl font-bold text-foreground mb-6">Nuestra Esencia Oaxaqueña</h3>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                Creemos firmemente que la sanación comienza en el momento en que cruzas nuestra puerta y te sientes valorado, escuchado y respetado.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                                Heredamos la calidez de Oaxaca: para nosotros no eres un paciente más, eres parte de nuestra familia y tejemos juntos tu camino hacia el bienestar con el mismo esmero que requiere una greca artesanal.
                            </p>

                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-foreground font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/10 flex items-center justify-center p-8 text-center"
                    >
                        <div>
                            <h4 className="text-2xl font-bold text-foreground mb-2">Conectando mente y cuerpo</h4>
                            <p className="text-foreground/70">[Fotografía representativa del trato paciente-quiropráctico]</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
