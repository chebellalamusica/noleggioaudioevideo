import { Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pacchetti', href: '#pacchetti' },
  { name: 'Listino', href: '#listino' },
  { name: 'Contatti', href: '#contatti' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="pt-16 pb-8 mt-24 bg-[#f5f6fa] border-t border-[#e8eaed] animate-fadeIn">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
        <div className="col-span-1 flex flex-col gap-3">
          <span className="text-2xl font-display font-bold text-[#1a1a1a] mb-2">ProAV Noleggio</span>
          <p className="text-[#4a4a4a] text-sm leading-relaxed">
            Noleggio professionale di impianti audio e video per eventi, presentazioni e installazioni di qualità.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#ff8c00]">Contatti</h3>
          <p className="text-sm text-[#4a4a4a]">
            Email: <a href="mailto:info@proavnoleggio.it" className="text-[#ff8c00] hover:underline">info@proavnoleggio.it</a>
          </p>
          <p className="text-sm text-[#4a4a4a] mt-2">
            Telefono: <a href="tel:+390123456789" className="text-[#ff8c00] hover:underline">+39 012 345 6789</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#ff8c00]">Navigazione</h3>
          <nav aria-label="Navigazione Footer">
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`${
                      link.name === 'Home'
                        ? 'text-[#ff8c00] font-bold hover:underline'
                        : 'text-[#4a4a4a] hover:text-[#ff8c00]'
                    } transition-colors cursor-pointer`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#ff8c00]">Seguici</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4a4a4a] hover:text-[#ff8c00] transition-colors"
          >
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-[#e8eaed] text-center text-sm text-[#4a4a4a]">
        © {new Date().getFullYear()} ProAV Noleggio. Tutti i diritti riservati.
      </div>
    </footer>
  );
}