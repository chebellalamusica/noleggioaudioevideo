import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function PCostruire ({ id }) {
  return (
    <Section id={id} title="Permesso di Costruire" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        Sono subordinati a permesso di costruire le opere di trasformazione urbanistica ed edilizia del territorio:
 
 gli interventi di nuova costruzione;    
 gli interventi di ristrutturazione urbanistica;    
 gli interventi di ristrutturazione edilizia che portino ad un organismo in tutto o in parte diverso dal precedente, con modifiche della volumetria complessiva degli edifici;    
 cambi d'uso in zone omogenee A;    
 modifiche della sagoma o della volumetria degli edifici.    


Per un approfondimento sulle pratiche edilizie e i relativi requisiti, si rimanda alla Tabella A (allegata al D.Lgs. 222/2016 – Sezione II - Edilizia), con particolare riferimento alle tipologie di intervento e alle procedure operative definite dalla normativa, nonché alle direttive e leggi vigenti aggiornate.
     
   Il termine per l'inizio dei lavori non può essere superiore ad un anno dal rilascio del titolo e deve essere comunicato obbligatoriamente dal direttore dei lavori; quello di ultimazione, entro il quale l'opera deve essere completata, non può superare i tre anni dall'inizio dei lavori e deve essere anch'esso comunicato dal direttore dei lavori.
   <br />
   Il rilascio del permesso di costruire, nei casi previsti, comporta la corresponsione di:
   
       un contributo commisurato all'incidenza degli oneri urbanizzazione;    
       un contributo commisurato al costo di costruzione.    
        
        </p>
      </article>
    </Section>
  )
}