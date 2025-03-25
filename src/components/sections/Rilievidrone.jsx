import { Target } from 'lucide-react';
import Section from '../ui/Section';

export default function Rilievidrone() {
  return (
    <Section id="rilievi" title="RILIEVI CON DRONE" icon={Target}>
      <article className="space-y-2">
        <p className="text-[#5F5F5F] animate-wave delay-150">
        Lo studio si occupa anche di rilievo, dalla ripresa aerea con drone alla redazione di elaborati finali.        </p>
      </article>
    </Section>
  );
}