import { circledot } from 'lucide-react';
import Section from '../ui/Section';

export default function PCatastali ({ id }) {
  return (
    <Section id={id} title="Pratiche Catastali" icon={circledot}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          Pratiche catastali
        </p>
      </article>
    </Section>
  )
}