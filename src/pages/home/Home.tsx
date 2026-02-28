import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/home/Hero'
import Services from '../../components/home/Services'
import Metodologia from '../../components/home/Metodologia'
import Footer from '../../components/layout/Footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground bg-grecas">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Metodologia />
            </main>
            <Footer />
        </div>
    )
}
