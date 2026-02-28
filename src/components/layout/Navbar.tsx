import { Heart, Menu } from 'lucide-react'
import { Button } from '../ui/Button'
import { useState } from 'react'
import { SignedIn, SignedOut, UserButton } from '@insforge/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <Heart className="h-8 w-8 text-primary fill-primary" />
                        <span className="font-bold text-2xl text-foreground tracking-tight">Quiero Quiropráctica</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#inicio" className="text-foreground/80 hover:text-primary transition-colors font-medium">Inicio</a>
                        <a href="#servicios" className="text-foreground/80 hover:text-primary transition-colors font-medium">Servicios</a>
                        <a href="#metodologia" className="text-foreground/80 hover:text-primary transition-colors font-medium">Nuestra Esencia</a>
                        <a href="#testimonios" className="text-foreground/80 hover:text-primary transition-colors font-medium">Testimonios</a>
                        <SignedOut>
                            <Link to="/login">
                                <Button variant="default" className="shadow-lg shadow-primary/25">
                                    Acceder al Portal
                                </Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-background border-t border-primary/10 shadow-lg pb-4">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center gap-2">
                        <a href="#inicio" className="block px-3 py-2 text-foreground/80 font-medium w-full text-center">Inicio</a>
                        <a href="#servicios" className="block px-3 py-2 text-foreground/80 font-medium w-full text-center">Servicios</a>
                        <a href="#metodologia" className="block px-3 py-2 text-foreground/80 font-medium w-full text-center">Nuestra Esencia</a>
                        <a href="#testimonios" className="block px-3 py-2 text-foreground/80 font-medium w-full text-center">Testimonios</a>
                        <SignedOut>
                            <Link to="/login" className="w-full">
                                <Button className="w-[90%] mt-2 rounded-full mx-auto block">Acceder al Portal</Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex justify-center mt-2 w-full">
                                <UserButton />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            )}
        </nav>
    )
}

