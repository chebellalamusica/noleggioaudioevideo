import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative bg-blue-700 text-white py-8 text-center mb-12 overflow-hidden">
      {/* Overlay immagine trasparente */}
      <div className="absolute inset-0 z-10">
      <Image
  src="/5184157.webp" // Usa WebP
  alt="Texture sfondo"
  fill
  priority={true} // Aggiungi questa prop
  className="object-cover opacity-50 mix-blend-overlay"
  sizes="100vw" 
  quality={75} // Riduci la qualità
/>
      </div>

      <div className="relative z-20 space-y-4">
        
        <h1 className="text-4xl font-bold m-0">STUDIO FRANCESCO BALESTRA</h1>
        <p className="text-xl text-blue-100">ARCHITETTO IUNIOR</p>

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