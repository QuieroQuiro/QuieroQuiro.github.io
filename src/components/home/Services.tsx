import { motion } from 'framer-motion'
import { Activity, Bone, HeartHandshake, PersonStanding } from 'lucide-react'

const services = [
    {
        icon: Bone,
        title: "Ajuste Quiropráctico",
        description: "Corrección de subluxaciones vertebrales para restaurar la comunicación de tu sistema nervioso.",
    },
    {
        icon: PersonStanding,
        title: "Evaluación Postural",
        description: "Análisis biomecánico profundo para detectar la raíz física de tus dolores crónicos.",
    },
    {
        icon: Activity,
        title: "Fisioterapia Aplicada",
        description: "Rehabilitación muscular y articular para fortalecer tu cuerpo de manera integral.",
    },
    {
        icon: HeartHandshake,
        title: "Atención Hogareña",
        description: "Nuestro sello distintivo. Te cuidamos con la calidez, respeto y cariño que te mereces.",
    }
]

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-white/50 backdrop-blur-md relative border-y border-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Nuestra Especialidad</h2>
                    <h3 className="text-4xl font-bold text-foreground mb-6">Servicios diseñados para tu bienestar total</h3>
                    <p className="text-lg text-foreground/70">
                        No tratamos solo síntomas, buscamos el origen de tu malestar para ofrecerte soluciones duraderas con un enfoque humano.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg shadow-black/5 border border-primary/5 hover:border-primary/20 transition-all group"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                                <service.icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                            <p className="text-foreground/70 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
