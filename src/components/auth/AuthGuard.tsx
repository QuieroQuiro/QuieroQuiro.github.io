import { useEffect, useState } from 'react';
import { useUser } from '@insforge/react';
import { insforge } from '../../lib/insforge';
import OnboardingForm from './OnboardingForm';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user } = useUser();
    const [needsOnboarding, setNeedsOnboarding] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const checkProfile = async () => {
            try {
                const { data, error } = await insforge.database
                    .from('profiles')
                    .select('phone, gender')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error("No se pudo leer el perfil del usuario:", error);
                    setNeedsOnboarding(true);
                    return;
                }

                if (!data?.phone || !data?.gender) {
                    setNeedsOnboarding(true);
                }
            } catch (err) {
                console.error("Error validando onboarding:", err);
            } finally {
                setLoading(false);
            }
        };

        checkProfile();
    }, [user]);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-background flex justify-center items-center z-50">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <>
            {children}
            {user && needsOnboarding && (
                <OnboardingForm onComplete={() => setNeedsOnboarding(false)} />
            )}
        </>
    );
}
