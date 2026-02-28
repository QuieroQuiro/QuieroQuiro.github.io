import { useState, useEffect } from "react";
import { useUser } from "@insforge/react";
import { insforge } from "../../lib/insforge";
import { Button } from "../ui/Button";

export default function OnboardingForm({ onComplete }: { onComplete: () => void }) {
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        gender: "",
        date_of_birth: "",
        phone: "",
        address: "",
        emergency_contact: "",
        weight: "",
        height: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);
        setError(null);

        try {
            const { error: dbError } = await insforge.database
                .from("profiles")
                .update({
                    gender: formData.gender,
                    date_of_birth: formData.date_of_birth || null,
                    phone: formData.phone,
                    address: formData.address,
                    emergency_contact: formData.emergency_contact,
                    weight: formData.weight ? parseFloat(formData.weight) : null,
                    height: formData.height ? parseFloat(formData.height) : null,
                })
                .eq("id", user.id);

            if (dbError) throw dbError;
            onComplete();
        } catch (err: any) {
            console.error(err);
            setError("Ocurrió un error al guardar tus datos. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-background flex text-foreground items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl border border-primary/10">
                <h2 className="text-3xl font-bold mb-2 text-primary text-center">¡Bienvenido a Quiero Quiropráctica!</h2>
                <p className="text-foreground/70 text-center mb-8">Para brindarte la mejor atención, necesitamos conocerte un poco más. Completa tu expediente clínico.</p>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Género *</label>
                            <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none">
                                <option value="">Selecciona...</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Fecha de Nacimiento *</label>
                            <input required type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Teléfono *</label>
                            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ej. 55 1234 5678" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Contacto de Emergencia *</label>
                            <input required type="text" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} placeholder="Nombre y Télefono" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Domicilio *</label>
                        <input required type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Calle, Número, Colonia, Ciudad" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                        <div>
                            <label className="block text-sm font-medium mb-1">Peso (kg) <span className="text-gray-400 font-normal">(Opcional pero recomendado)</span></label>
                            <input type="number" step="0.1" name="weight" value={formData.weight} onChange={handleChange} placeholder="Ej. 70.5" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Estatura (cm) <span className="text-gray-400 font-normal">(Opcional)</span></label>
                            <input type="number" step="1" name="height" value={formData.height} onChange={handleChange} placeholder="Ej. 175" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary/50 outline-none" />
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button type="submit" disabled={loading} className="w-full shadow-lg shadow-primary/25">
                            {loading ? "Guardando expediente..." : "Completar Registro Médico"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
