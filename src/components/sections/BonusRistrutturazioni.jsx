import { HousePlus } from 'lucide-react';
import Section from '../ui/Section';

export default function BonusRistrutturazioni({ id }) {
  return (
    <Section id={id} title="Bonus Ristrutturazioni" icon={HousePlus}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        Dal 1° gennaio 2025 al 31 dicembre 2025, il Bonus Ristrutturazione prevede una detrazione del 50% solo per il 2025 e solo per gli interventi sulle abitazioni principali, mentre per le seconde e terze case spetta una detrazione dall’imposta lorda pari al 36% delle spese sostenute, in entrambi i casi fino a un ammontare complessivo delle stesse non superiore a 96.000 euro per unità immobiliare. La detrazione delle spese sostenute negli anni 2026 e 2027 scende anche per le abitazioni principali al 36% e per le altre al 30%.


La detrazione a regime è pari al 36% delle spese sostenute nell’anno 2025 e al 30% delle spese sostenute negli anni 2026 e 2027. viene prevista una maggiorazione delle aliquote per le abitazioni principali per cui la detrazione è innalzata al 50% delle spese sostenute nell’anno 2025 e al 36% delle spese sostenute negli anni 2026 e 2027.


Il Bonus Ristrutturazione è concesso per gli interventi alle lettere a), b), c) e d) dell’articolo 3 del D.P.R. 380/2001 e finalizzati a:

manutenzione straordinaria;

restauro e risanamento conservativo;

ristrutturazione edilizia;

manutenzione ordinaria;

ricostruzione o ripristino dell’immobile danneggiato a seguito di eventi calamitosi;

realizzazione di autorimesse o posti auto pertinenziali;

eliminazione delle barriere architettoniche;

interventi di bonifica dell'amianto.

        </p>
      </article>
    </Section>
  )
}