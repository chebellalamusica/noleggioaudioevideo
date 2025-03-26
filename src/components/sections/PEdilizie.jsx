import { Book } from 'lucide-react'
import Link from 'next/link'
import Section from '../ui/Section'
import { useRouter } from 'next/router'

const incentivi = [
    { name: 'BONUS RISTRUTTURAZIONI', id: 'bonusristrutturazioni' },
    { name: 'ECOBONUS', id: 'ecobonus' },
    { name: 'BONUS MOBILI', id: 'bonusmobili' },
    { name: 'SISMABONUS', id: 'sismabonus' },
]

const pratiche = [
    { name: 'CILA', id: 'Cila' },
    { name: 'SCIA', id: 'Scia' },
    { name: 'PERMESSO DI COSTRUIRE', id: 'PCostruire' },
    { name: 'SCIA sostitutiva PdC', id: 'AttestatoAgibilita' },
    { name: 'PRATICHE CATASTALI', id: 'PCatastali' },
]

export default function PEdilizie() {
    const router = useRouter()

    const handleAnchorLink = (path, hash) => {
        router.push({ pathname: path, hash: hash })
            .then(() => {
                const element = document.getElementById(hash)
                if(element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    })
                }
            })
    }

    return (
        <Section id="edilizie" title="PRATICHE EDILIZIE" icon={Book}>
            <article className="space-y-2">
                <p className="text-[17px] text-[#5F5F5F] animate-wave ">
                Offriamo supporto completo nelle pratiche edilizie, dalla fase progettuale
                 alla presentazione delle domande presso glie enti competenti. 
                <br /> 
Affianchiamo i propri clienti per una conformità certa con le normative vigenti, per
ottenere le autorizzazioni richieste dagli enti competenti.               
<span className="block h-[10px]" />
Le normative edilizie cambiano continuamente, e orientarsi tra leggi, regolamenti e
 iter burocratici può essere complesso. Per questo mi dedico ad affiancare privati e
  professionisti nella gestione delle pratiche, dalla progettazione agli adempimenti finali.
  <span className="block h-[10px]" />
  Mi occupo della corretta compilazione delle pratiche edilizie per l'ottenimento dei titoli
   abilitativi: CILA, SCIA, Permesso di Costruire, SCIA alternativa al PdC.
   <span className="block h-[10px]" />
</p>
                <div className="flex flex-wrap gap-4 justify-between">
                    {/* Colonna Pratiche Edilizie */}
                    <div className="flex-1 min-w-[300px] border-2 border-[#A0D1F6]/20 rounded-lg p-1 space-y-3 transition-all duration-300 hover:border-[#A0D1F6]/25">
                        <div className="pt-2 bg-[#E6F5FC]/50 rounded-[8px] p-2 space-y-3">
                            <Link 
                                href="/pratiche"
                                className="text-[18px] text-[#A0D1F6] font-medium animate-wave delay-150 hover:underline transition-colors"
                            >
                                GESTIONE PRATICHE EDILIZIE
                            </Link>
                        </div>
                        
                        <ul className="space-y-2">
                            {pratiche.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-5 text-[#5F5F5F] hover:translate-x-1 transition-transform animate-wave"
                                    style={{ 
                                      animationDelay: `${300 + (index * 150)}ms`,
                                   
                                    }}                                >
                                    <span className="absolute left-0 text-[#A0D1F6] text-[18px]">▹</span>
                                    <button
                                        onClick={() => handleAnchorLink('/pratiche', item.id)}
                                        className="hover:text-[#A0D1F6] transition-colors text-[18px] w-full text-left"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonna Bonus Edilizi */}
                    <div className="flex-1 min-w-[300px] border-2 border-[#A0D1F6]/20 rounded-lg p-1 space-y-3 transition-all duration-300 hover:border-[#A0D1F6]/25">
                        <div className="pt-2 bg-[#E6F5FC]/50 rounded-[8px] p-2 space-y-3">
                            <Link 
                                href="/bonus"
                                className="text-[18px] text-[#A0D1F6] font-medium animate-wave delay-150 hover:underline transition-colors"
                            >
                                PRINCIPALI BONUS EDILIZI ITALIANI ATTUALMENTE IN VIGORE
                            </Link>
                        </div>
                        
                        <ul className="space-y-2">
                            {incentivi.map((item, index) => (
                                <li
                                    key={index}
                                    className={`relative pl-5 text-[#5F5F5F] hover:translate-x-1 transition-transform animate-wave delay-${300 + (index * 150)}`}
                                >
                                    <span className="absolute left-0 text-[#A0D1F6] text-[18px]">▹</span>
                                    <button
                                        onClick={() => handleAnchorLink('/bonus', item.id)}
                                        className="hover:text-[#A0D1F6] transition-colors text-[18px] w-full text-left"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </Section>
    )
}