import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function Cila ({ id }) {
  return (
    <Section id={id} title="CILA" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
          CILA
        </p>
      </article>
    </Section>
  )
}