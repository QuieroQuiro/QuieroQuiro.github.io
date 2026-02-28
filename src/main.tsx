import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InsforgeProvider } from '@insforge/react'
import { insforge } from './lib/insforge'
import AuthGuard from './components/auth/AuthGuard'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <InsforgeProvider client={insforge as any}>
            <AuthGuard>
                <App />
            </AuthGuard>
        </InsforgeProvider>
    </React.StrictMode>,
)
