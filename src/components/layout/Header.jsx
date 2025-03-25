'use client';
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
      w-full flex flex-col 
      bg-[#A0D1F6]/50
       text-[#49545A] py-8 text-center
  shadow-[0_-20px_30px_-10px_rgba(125,211,252,0.25)]
  mask-fade
      transition-transform duration-500 
      ease-out-cubic
      ${isMounted ? 'translate-y-0' : '-translate-y-full'}
    `}>
      
      <div className="absolute inset-0 z-10">
        <Image
          src="/5184157.webp"
          alt="Texture sfondo"
          fill
          priority
          className="object-cover opacity-70 mix-blend-luminosity"
          sizes="100vw" 
          quality={75}
        />
      </div>

      <div className="relative z-20 space-y-8 container mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold m-0">STUDIO FRANCESCO BALESTRA</h1>
          <p className="text-xl font-mono text-[#718096]-600">ARCHITETTO IUNIOR</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4" id="contact-info">
          <a href="mailto:francescobalestrapd@email.com" className="hover:underline">
            <p className="flex items-center gap-2 bg-black/3 px-3 py-1 rounded-[2px_12px_2px_12px]">
              <Mail size={18} /> francescobalestrapd@gmail.com
            </p>
          </a>
          <p className="flex items-center gap-2 bg-black/3 px-3 py-1 rounded-[2px_12px_2px_12px]">
            <Phone size={18} /> +39 3467923442
          </p>
          <p className="flex items-center gap-2 bg-black/3 px-3 py-1 rounded-[2px_12px_2px_12px]">
            <MapPin size={18} /> Padova, Italia
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-7 py-1 rounded-sm border-1 border-black/2 hover:border-[#D8EFFD] transition-all bg-black/4 hover:bg-[#D8EFFD]"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}