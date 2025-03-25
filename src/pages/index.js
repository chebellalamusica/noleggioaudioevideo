import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PEdilizie from '../components/sections/PEdilizie';
import Rilievidrone from '../components/sections/Rilievidrone';
import ContactForm from '../components/sections/ContactForm';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    setShowScrollButton(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <PEdilizie />
      <Rilievidrone />
      <ContactForm />

      {/* Bottone Scroll to Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#A0D1F6] text-white rounded-full shadow-lg hover:bg-[#D8EFFD] transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </Layout>
  )
}