import { useUser } from '@insforge/react';

export default function PortalPaciente() {
    const { user } = useUser();

    if (!user) return <div className="p-8 text-center text-red-500">Acceso Denegado. Inicia Sesión primero.</div>;

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Mi Portal de Salud</h1>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <h2 className="text-xl font-semibold mb-2">Hola, paciente {user.email}</h2>
                <p className="text-foreground/70">Tu rutina generada por Inteligencia Artificial y tu doctor aparecerá aquí.</p>

                {/* Placeholder para rutinas */}
                <div className="mt-8 grid grid-cols-1 gap-4">
                    <div className="border border-dashed border-gray-300 p-12 rounded-xl text-center text-gray-400 flex flex-col items-center justify-center">
                        <span className="text-lg mb-2">Aún no tienes rutinas asignadas.</span>
                        <span className="text-sm">Por favor espera a que tu quiropráctico evalúe tu caso.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
