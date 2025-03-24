import { useEffect, useState } from 'react';
import { montserrat } from '@/lib/fonts'; 
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  // Effetto per le preferenze di motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
      if (mediaQuery.matches) {
        setIsMounted(true);
      }
    }
  }, []);

  // Effetto per gestire il resize della finestra
  useEffect(() => {
    const handleResize = () => {
      if (window.scrollY === 0) {
        setIsMounted(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={`${montserrat.variable} font-sans min-h-screen bg-gray-50`}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Animato */}
        <div className={`
           top-0 w-full z-50 
          transition-transform duration-500 
          ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isMounted ? 'translate-y-0' : '-translate-y-full'}
          will-change-transform
        `}>
          <Header />
        </div>

        {/* Contenuto Principale */}
        <div className="flex-grow">
          <main className="container mx-auto px-4 py-8 max-w-3xl">
            {children}
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}