import React, { useState } from 'react';
import { insforge } from '../../lib/insforge';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Mail, Lock, User as UserIcon, AlertCircle, ArrowLeft } from 'lucide-react';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        const { data, error: authError } = await insforge.auth.signUp({
            email,
            password,
            name,
        });

        if (authError) {
            setError(authError.message || 'Error al crear la cuenta');
        } else if (data) {
            if (data.requireEmailVerification) {
                setMessage('Por favor verifica tu correo electrónico para continuar.');
            } else {
                navigate('/paciente');
            }
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        await insforge.auth.signInWithOAuth({
            provider: 'google',
            redirectTo: window.location.origin + '/paciente',
        });
    };

    return (
        <div className="flex flex-col flex-grow items-center justify-center p-4 py-12 md:py-24 animate-in fade-in duration-500">
            <Link to="/" className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
            </Link>

            <div className="w-full max-w-md bg-background/80 backdrop-blur-xl border border-primary/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 -ml-16 -mt-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl shadow-[0_0_50px_rgba(var(--primary),0.5)]"></div>
                <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl shadow-[0_0_50px_rgba(var(--primary),0.5)]"></div>

                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Crear cuenta</h1>
                    <p className="text-foreground/60">Únete a Quiero Quiropráctica</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3 relative z-10">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )}

                {message && (
                    <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-3 relative z-10">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{message}</p>
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-5 relative z-10">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground ml-1" htmlFor="name">Nombre completo</label>
                        <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Juan Pérez"
                                className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-10 py-3 outline-none transition-all placeholder:text-foreground/30 text-foreground"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground ml-1" htmlFor="email">Correo electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="ejemplo@correo.com"
                                className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-10 py-3 outline-none transition-all placeholder:text-foreground/30 text-foreground"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground ml-1" htmlFor="password">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                minLength={8}
                                className="w-full bg-background/50 border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-10 py-3 outline-none transition-all placeholder:text-foreground/30 text-foreground"
                            />
                        </div>
                        <p className="text-xs text-foreground/50 ml-1">Mínimo 8 caracteres</p>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl py-6 shadow-lg shadow-primary/25 font-semibold text-base mt-2"
                    >
                        {loading ? 'Redirigiendo...' : 'Crear cuenta'}
                    </Button>
                </form>

                <div className="relative my-8 z-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-primary/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 text-foreground/50 bg-background/80">O regístrate con</span>
                    </div>
                </div>

                <div className="flex gap-4 relative z-10">
                    <Button
                        variant="outline"
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full rounded-xl py-6 border-primary/20 hover:bg-primary/5 font-medium flex items-center justify-center gap-2 text-foreground"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </Button>
                </div>

                <p className="mt-8 text-center text-sm text-foreground/60 relative z-10">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}
