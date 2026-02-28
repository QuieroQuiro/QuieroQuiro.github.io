import { Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-foreground text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h22v12.5h-2zM0 20h2v2H0v-2zm0 4h2v2H0v-2zm0 4h2v2H0v-2zm0 4h2v2H0v-2zm22-12H4v-2h18v2zm0-4H4v-2h18v2zm0-4H4V6h18v2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="w-8 h-8 text-primary fill-primary" />
                            <span className="font-bold text-2xl tracking-tight">Quiero Quiropráctica</span>
                        </div>
                        <p className="text-white/70 max-w-sm mb-6">
                            Cuidamos de ti con el trato cálido y humano que mereces, combinando ciencia médica con el corazón.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-3 text-white/70">
                            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                            <li><a href="#metodologia" className="hover:text-primary transition-colors">Nuestra Esencia</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contacto</h4>
                        <ul className="space-y-3 text-white/70">
                            <li>📍 Calle Ejemplo 123, Colonia Centro</li>
                            <li>📞 (55) 1234-5678</li>
                            <li>✉️ hola@quieroquiropractica.com</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
                    <p>© {new Date().getFullYear()} Quiero Quiropráctica. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
