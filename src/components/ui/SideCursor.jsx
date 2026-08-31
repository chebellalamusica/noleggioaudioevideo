import { useEffect, useState } from 'react';

export default function SideCursor() {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setPos(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed right-4 top-0 h-full z-50 pointer-events-none hidden md:block">
      <div className="relative h-full w-2 rounded-full bg-[#e8eaed] p-1">
        <div style={{ transform: `translateY(${pos}% )` }} className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff8c00] shadow-lg" />
      </div>
    </div>
  );
}
