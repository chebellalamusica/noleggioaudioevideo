import { Target } from 'lucide-react';
import Section from '../ui/Section';

export default function BonusMobili ({ id }) {
  return (
    <Section id={id} title="Bonus Mobili" icon={Target}>
      <article className="space-y-2">
        <p className="text-gray-700 animate-wave delay-150">
          Contenuto completo del bonus mobili...
        </p>
      </article>
    </Section>
  )
}