import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import BonusRistrutturazioni from '../components/sections/BonusRistrutturazioni';
import EcoBonus from '../components/sections/EcoBonus';
import BonusMobili from '../components/sections/BonusMobili';
import SismaBonus from '../components/sections/SismaBonus';
import BonusBarriereArchitettoniche from '../components/sections/BonusBarriereArchitettoniche';

export default function AboutPage() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleHashScroll = () => {
            if(window.location.hash) {
                const id = window.location.hash.replace('#', '')
                setTimeout(() => {
                    const element = document.getElementById(id)
                    if(element) {
                        element.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start' 
                        })
                    }
                }, 300)
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
            <div className="container mx-auto px-4 max-w-3xl mb-8 text-center">
                <h1 className="text-3xl font-semibold text-[#2B4D76] mb-4">
                    Agevolazioni Fiscali per la Tua Casa
                </h1>
                
                <div className="glow-box bg-[#A0D1F6]/10 p-2 rounded-xl transition-all">
                    <h2 className="text-[19px] text-[#2B4D76] font-medium leading-snug">                
                        Un supporto strategico per sfruttare gli incentivi previsti 
                        dalla legge, trasformando i tuoi interventi in opportunità di risparmio.
                    </h2>
                </div>

                <div className="text-[17px] text-[#5F5F5F] mt-5 space-y-4">
                    <p>
                        Massimizza i vantaggi delle detrazioni previste dalla legge per interventi di riqualificazione,
                        efficienza energetica e sicurezza sismica.
                    </p>
                    <p>
                        Un supporto completo per orientarti tra benefit e adempimenti.
                    </p>
                </div>
            </div>

            <BonusRistrutturazioni id="bonusristrutturazioni" />
            <EcoBonus id="ecobonus" />
            <BonusMobili id="bonusmobili" />
            <SismaBonus id="sismabonus" />
            <BonusBarriereArchitettoniche id="bonusbarrierearchitettoniche" />

            <div className="container mx-auto px-4 max-w-3xl mt-8 mb-12 text-center">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-[#A0D1F6] text-white px-6 py-3 rounded-lg hover:bg-[#D8EFFD] transition-colors text-lg"
                >
                    <Home className="w-5 h-5" />
                    Torna alla Pagina Principale
                </Link>
            </div>

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