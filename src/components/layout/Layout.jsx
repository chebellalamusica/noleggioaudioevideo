import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, noHeader = false }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden font-sans antialiased" style={{background: 'var(--background)', color: 'var(--foreground)'}}>
      {/* Header */}
      {!noHeader && (
        <div className={`w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isMounted ? 'translate-y-0' : '-translate-y-20'}`}>
          <Header />
        </div>
      )}
      
      {/* Contenuto Principale */}
      <main className="flex-grow flex flex-col w-full px-4 md:px-6 pt-16 pb-16 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}