import { Book } from 'lucide-react'
import Link from 'next/link'
import Section from '../ui/Section'

const incentivi = [
    { name: 'BONUS RISTRUTTURAZIONI', id: 'bonusristrutturazioni' },
    { name: 'ECOBONUS', id: 'ecobonus' },
    { name: 'BONUS MOBILI', id: 'bonusmobili' },
    { name: 'SISMABONUS', id: 'sismabonus' },
]

export default function PEdilizie() {
    return (
        <Section id="edilizie" title="PRATICHE EDILIZIE" icon={Book}>
            <article className="space-y-2">
                <p className="text-gray-700 animate-wave" >
                Lo studio offre consulenze e gestione delle pratiche edilizie, dalla progettazione alla presentazione delle domande fondamentali per l'esecuzione di lavori di costruzione, modifica o ristrutturazione. Queste pratiche sono necessarie per ottenere le autorizzazioni richieste dagli enti competenti, come l'Ufficio Tecnico del Comune, e garantiscono che gli interventi siano conformi alla normativa vigente.
                </p>
                
                
                <div className="mb-3 pt-2">  {/* Aggiunto padding-top e margin-bottom maggiore */}
                <Link 
                    href="/bonus"
                    className="text-base text-blue-600 font-medium animate-wave delay-150 hover:underline transition-colors"
                >
                    PRINCIPALI BONUS EDILIZI ITALIANI ATTUALMENTE IN VIGORE
                </Link>
                </div>
                
                <ul className="space-y-2">
                    {incentivi.map((item, index) => (
                        <li
                            key={index}
                            className={`relative pl-5 text-gray-700 hover:translate-x-1 transition-transform animate-wave delay-${300 + (index * 150)}`}
                        >
                            <span className="absolute left-0 text-blue-600">▹</span>
                            
                            <Link 
                                href={`/bonus#${item.id}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
        </Section>
    )
}