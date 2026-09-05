'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pacchetti', href: '#pacchetti' },
    { name: 'Listino', href: '#listino' },
    { name: 'Contatti', href: '#contatti' }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md shadow-sm border-b border-[#e8eaed]/30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="ProAV Noleggio"
            width={70}
            height={70}
            className="rounded-md shadow-sm object-contain bg-white"
          />
          <span className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
            ProAV Noleggio
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isHome = item.name === 'Home';
            return (
              <a
                key={item.href + item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-semibold px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-[#f5f6fa] hover:text-[#ff8c00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb347] cursor-pointer ${
                  isHome ? 'text-[#ff8c00]' : 'text-[#4a4a4a]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}