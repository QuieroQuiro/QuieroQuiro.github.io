import { useUser } from '@insforge/react';

export default function DashboardDoctor() {
    const { user } = useUser();

    if (!user) return <div className="p-8 text-center text-red-500">Acceso Denegado. Requiere Autorización Médica.</div>;

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Dashboard Médico</h1>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <h2 className="text-xl font-semibold mb-2">Bienvenido Dr. {user.email}</h2>
                <p className="text-foreground/70">Desde aquí podrás asignar videos a tus pacientes y verificar sus métricas.</p>

                {/* Placeholder para futuras herramientas */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-dashed border-gray-300 p-8 rounded-xl text-center text-gray-400">
                        [Módulo de Mis Pacientes - En construcción]
                    </div>
                    <div className="border border-dashed border-gray-300 p-8 rounded-xl text-center text-gray-400">
                        [Catálogo de Videos - En construcción]
                    </div>
                </div>
            </div>
        </div>
    );
}
