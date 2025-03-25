import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import BonusRistrutturazioni from '../components/sections/BonusRistrutturazioni';
import EcoBonus from '../components/sections/EcoBonus';
import BonusMobili from '../components/sections/BonusMobili';
import SismaBonus from '../components/sections/SismaBonus';

export default function AboutPage() {
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
            <BonusRistrutturazioni id="bonusristrutturazioni" />
            <EcoBonus id="ecobonus" />
            <BonusMobili id="bonusmobili" />
            <SismaBonus id="sismabonus" />

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