import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function PCostruire ({ id }) {
  return (
    <Section id={id} title="Permesso di Costruire" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          Contenuto completo del bonus mobili...
        </p>
      </article>
    </Section>
  )
}