import { useEffect, useState } from 'react';
import { montserrat } from '@/lib/fonts'; 
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${montserrat.variable} font-sans min-h-screen bg-gray-50`}>
      <div className="min-h-screen flex flex-col">
        {/* Header Animato */}
        <div className={`
          w-full flex flex-col z-50 
          transition-transform duration-500 
          ease-[cubic-bezier(0.33,1,0.68,1)]
          ${isMounted ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <Header />
        </div>

        {/* Contenuto Principale */}
        <div className="flex-grow pt-0">
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