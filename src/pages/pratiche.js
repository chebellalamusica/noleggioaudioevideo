import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Cila from '../components/sections/Cila';
import Scia from '../components/sections/Scia';
import PCostruire from '../components/sections/PCostruire';
import SciaAlternativa from '../components/sections/SciaAlternativa';
import PCatastali from '../components/sections/PCatastali';

export default function Pratiche() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleHashScroll = () => {
            if(window.location.hash) {
                const id = window.location.hash.replace('#', '')
                const element = document.getElementById(id)
                if(element) {
                    setTimeout(() => {
                        element.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        })
                    }, 300)
                }
            }
        }

        const checkScrollTop = () => {
            setShowScrollButton(window.pageYOffset > 200)
        }

        handleHashScroll()
        window.addEventListener('hashchange', handleHashScroll)
        window.addEventListener('scroll', checkScrollTop)
        
        return () => {
            window.removeEventListener('hashchange', handleHashScroll)
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [])


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Layout noHeader>
            {/* Sezione introduttiva aggiunta */}
            <div className="container mx-auto px-4 max-w-3xl mb-8 text-center">
                <h1 className="text-[33px] font-semibold text-[#2B4D76] mb-4">
                    Gestione delle Pratiche Edilizie
                </h1>
                <div className="glow-box bg-[#A0D1F6]/10 p-2 rounded-xl transition-all">
                <h2 className="text-[17px] text-[#2B4D76] font-medium leading-snug">                
                    Un servizio completo per orientarti nel complesso panorama normativo, 
                garantendo il corretto iter autorizzativo per ogni tipologia di intervento.

                </h2>
                </div>
                <p className="text-lg text-[#5F5F5F] mt-5">
                {`Tutto il Titolo II del T.U. edilizia (D.P.R. n. 380 del 2001) tratta i titoli abilitativi per regolare gli interventi edilizi. 
  Questi ad oggi prevedono l'attività di edilizia libera, la comunicazione di inizio lavori asseverata (CILA), la segnalazione certificata 
  di inizio attività (SCIA) gratuita, la segnalazione certificata di inizio attività (SCIA) onerosa alternativa al permesso di costruire oneroso, 
  il permesso di costruire (PDC) gratuito od oneroso. Questi titoli costituiscono gli strumenti autorizzativi fondamentali per avviare lavori 
  in conformità alla legge.`}
                </p>
            </div>

            <Cila id="Cila" />
            <Scia id="Scia" />
            <PCostruire id="PCostruire" />
            <SciaAlternativa id="SciaAlternativa" />
            <PCatastali id="PCatastali" />

            
            <div className="container mx-auto px-4 max-w-3xl mt-8 mb-12 text-center">
                <Link href="/" className="inline-flex items-center gap-2 bg-[#A0D1F6] text-white px-6 py-3 rounded-lg hover:bg-[#D8EFFD] transition-colors text-lg">
                    <Home className="w-5 h-5" />
                    Torna alla Pagina Principale
                </Link>
            </div>

            {showScrollButton && (
                <button onClick={scrollToTop} className="fixed bottom-8 right-8 p-3 bg-[#A0D1F6] text-white rounded-full shadow-lg hover:bg-[#D8EFFD] transition-colors">
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </Layout>
    )
}