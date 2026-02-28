import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Metodologia from './components/home/Metodologia';
import Footer from './components/layout/Footer';
import DashboardDoctor from './pages/DashboardDoctor';
import PortalPaciente from './pages/PortalPaciente';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function LandingPage() {
    return (
        <main>
            <Hero />
            <Services />
            <Metodologia />
        </main>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground bg-grecas flex flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/dashboard" element={<DashboardDoctor />} />
                        <Route path="/paciente" element={<PortalPaciente />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );

}

export default App;
