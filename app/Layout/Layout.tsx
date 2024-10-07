import React, { useEffect, useState } from 'react'
import './Layout.css'
import NavBar from './navbar/NavBar';
import FloatNavbar from './navbar/FloatNavbar';
import Footer from './footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <div className="min-h-screen relative">
            <div className="bg-absolute fixed top-0 z-[-2] h-screen w-screen"></div>
            <main className="relative z-10">
                {isMobile ? <FloatNavbar /> : <NavBar />}
                {children}
                <Footer />
            </main>
        </div>
    )
}