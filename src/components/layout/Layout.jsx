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
      {!noHeader && <Header />}
      
      {/* Contenuto Principale */}
      <main className="flex-grow flex flex-col w-full px-4 md:px-6 pt-16 pb-16 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}