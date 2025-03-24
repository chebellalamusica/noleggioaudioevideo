'use client'; // Aggiungi questa direttiva in cima

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const navItems = [
    { name: 'Pratiche Edilizie', href: '#edilizie' },
    { name: 'Rilievi Drone', href: '#rilievi' },
    { name: 'Contatti', href: '#contatti' }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={`
      fixed top-0 w-full z-50 
      
      bg-slate-800 text-white py-8 text-center

      transition-transform duration-500 
      ease-out-cubic
      ${isMounted ? 'translate-y-0' : '-translate-y-full'}
      overflow-hidden
    `}>
      <div className="absolute inset-0 z-10">
        <Image
          src="/5184157.webp"
          alt="Texture sfondo"
          fill
          priority={true}
          className="object-cover opacity-20 mix-blend-overlay"
          sizes="100vw" 
          quality={75}
        />
      </div>

      <div className="relative z-20 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold m-0">STUDIO FRANCESCO BALESTRA</h1>
          <p className="text-xl text-blue-100">ARCHITETTO IUNIOR</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-4" id="contact-info">
          <a href="mailto:francescobalestrapd@email.com" className="hover:underline">
            <p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
              <Mail size={18} /> francescobalestrapd@gmail.com
            </p>
          </a>
          <p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
            <Phone size={18} /> +39 3467923442
          </p>
          <p className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-xl">
            <MapPin size={18} /> Padova, Italia
          </p>
        </div>
      </div>
    </header>
  );
}