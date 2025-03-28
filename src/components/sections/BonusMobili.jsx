import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function BonusMobili ({ id }) {
  return (
    <Section id={id} title="Bonus Mobili" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150"> 
       
        Il Bonus Mobili è un’agevolazione che consente di portare in detrazione fiscale il 50% della spesa sostenuta per l’acquisto di mobili e grandi elettrodomestici.</p>

        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150"> 

La Legge di Bilancio 2025 ha prorogato il Bonus Mobili fino al 31 dicembre 2025.</p>
<p className="text-[17px] text-[#5F5F5F] animate-wave delay-150"> 

      L’agevolazione è subordinata agli interventi, anche realizzati in economia, di:</p> 
      <ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150"> 
   
   <li>manutenzione straordinaria;</li>
   <li>ricostruzione o ripristino di un immobile danneggiato;</li>
   <li>restauro;</li>
   <li>manutenzione ordinaria.</li>

    
    </ul>
       
        
      </article>
    </Section>
  )
}