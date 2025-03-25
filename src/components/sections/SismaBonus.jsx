import { Target } from 'lucide-react';
import Section from '../ui/Section';

export default function SismaBonus ({ id }) {
  return (
    <Section id={id} title="Sisma Bonus" icon={Target}>
      <article className="space-y-2">
        <p className="text-[#5F5F5F] animate-wave delay-150">
          Contenuto completo del sisma bonus...
        </p>
      </article>
    </Section>
  )
}