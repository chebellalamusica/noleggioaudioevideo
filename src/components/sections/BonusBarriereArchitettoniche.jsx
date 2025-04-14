import { Ban } from 'lucide-react';
import Section from '../ui/Section';

export default function BonusBarriereArchitettoniche ({ id }) {
  return (
    <Section id={id} title="Bonus Barriere Architettoniche" icon={Ban}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        Per i contribuenti che effettuano interventi per eliminare le barriere architettoniche, la normativa sui bonus edilizi prevede innanzitutto la detrazione del 75%, introdotta dalla Legge di Bilancio 2022 (Legge 234/2021) ed estesa fino al 31 dicembre 2025 dalla Legge di Bilancio 2023 (legge 197/2022).        </p>
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
Il tetto massimo si calcola:</p>
        
<ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150">        
       <li>  Per gli edifici unifamiliari o unità con accesso autonomo, il tetto massimo è di 50.000 euro;   </li> 
        <li> Per gli edifici plurifamiliari da 2 a 8 unità, il tetto massimo è di 40.000 euro moltiplicati per il numero delle unità immobiliari;    </li>
        <li> Per i condomini con più di 8 unità, il tetto massimo è di 30.000 euro moltiplicati per il numero delle unità immobiliari;   </li> 
         
      </ul>
      <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
      Il rimborso del bonus avviene tramite la dichiarazione dei redditi. 
      </p>  
      </article>
    </Section>
  )
}