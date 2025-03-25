import { Book } from 'lucide-react'
import Link from 'next/link'
import Section from '../ui/Section'

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
    { name: 'ATTESTATO AGIBILITA', id: 'AttestatoAgibilita' },
    { name: 'PRATICHE CATASTALI', id: 'PCatastali' },
]

export default function PEdilizie() {
    return (
        <Section id="edilizie" title="PRATICHE EDILIZIE" icon={Book}>
            <article className="space-y-2">
                <p className="text-[17px] text-[#5F5F5F] animate-wave">
                    Offriamo consulenze e gestione delle pratiche edilizie, dalla progettazione alla compilazione e presentazione delle domande fondamentali per l'esecuzione di lavori di costruzione, modifica o ristrutturazione. Queste pratiche sono necessarie per ottenere le autorizzazioni richieste dagli enti competenti, come l'Ufficio Tecnico del Comune, e garantiscono che gli interventi siano conformi alla normativa vigente.
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
                                    className={`relative pl-5 text-[#5F5F5F] hover:translate-x-1 transition-transform animate-wave delay-${300 + (index * 150)}`}
                                >
                                    <span className="absolute left-0 text-[#A0D1F6] text-[18px]">▹</span>
                                    <Link 
                                        href={`/pratiche#${item.id}`}
                                        className="hover:text-[#A0D1F6] transition-colors text-[18px]"
                                    >
                                        {item.name}
                                    </Link>
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
                                    <Link 
                                        href={`/bonus#${item.id}`}
                                        className="hover:text-[#A0D1F6] transition-colors text-[18px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </Section>
    )
}