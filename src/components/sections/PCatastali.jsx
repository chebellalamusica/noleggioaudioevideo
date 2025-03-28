import { CircleDot } from 'lucide-react';
import Section from '../ui/Section';

export default function PCatastali ({ id }) {
  return (
    <Section id={id} title="Altri adempimenti" icon={CircleDot}>
      <article className="space-y-2">
      <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">

          Gli adempimenti tecnico-amministrativi costituiscono una componente essenziale per garantire la conformità normativa e la regolarità giuridica degli immobili. </p>
          <p className="text-[17px] text-[#5F5F5F]font-semibold animate-wave delay-150">
          Attestati di agibilità</p>
          <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          L’attestato di agibilità certifica la rispondenza di un immobile alle normative vigenti in materia di sicurezza, igiene e salubrità.<br />
          Inoltre costituisce oggi un passaggio indispensabile, non solo per convalidare la sicurezza strutturale ma per accedere a vantaggi fiscali e finanziamenti agevolati.</p>
          <p className="text-[17px] text-[#5F5F5F]font-semibold animate-wave delay-150">
          Condoni edilizi</p>
          <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          I condoni riguardano la regolarizzazione di opere realizzate in difformità dalle autorizzazioni originarie. Il processo implica una valutazione tecnico-legale per identificare le irregolarità, seguita da un progetto di adeguamento che rispetti gli standard attuali. 
        </p>
        <p className="text-[17px] text-[#5F5F5F]font-semibold animate-wave delay-150">
        Pratiche catastali</p>
          <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          Le pratiche catastali definiscono la destinazione d’uso e le caratteristiche tecniche degli immobili nel sistema dell’Agenzia del Territorio.</p>
        
      </article>
    </Section>
  )
}