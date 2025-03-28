import { Waves } from 'lucide-react';
import Section from '../ui/Section';

export default function SismaBonus ({ id }) {
  return (
    <Section id={id} title="Sisma Bonus" icon={Waves}>
      <article className="space-y-2">
        <div className=" text-[17px] text-[#5F5F5F] animate-wave delay-150">
        <p>Nel panorama normativo del 2025, il Sismabonus si conferma uno strumento strategico per interventi antisismici, evolvendosi in un’ottica di resilienza integrata. Oltre alle detrazioni fiscali fino all’85% (in base alla classe di rischio raggiunta), oggi il bonus include:</p>
        <ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150"> 
   
   <li>Vantaggi Cumulativi: Abbinamento con Ecobonus 4.0 e Agevolazioni “Casa Green” per interventi combinati su sicurezza sismica, efficienza energetica e domotica antisismica;</li>
   <li>Sismabonus “Proattivo”: Incentivi maggiorati per chi adotta sistemi di monitoraggio dinamico 24/7 con sensori IoT certificati;</li>
   <li>Sconti SUAP: Contributi per pratiche digitali accelerate tramite piattaforma governativa "Edilizia 4.0";</li>

    
    </ul>
        
        
        </div>
      </article>
    </Section>
  )
}