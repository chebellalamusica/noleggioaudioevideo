import { circledot } from 'lucide-react';
import Section from '../ui/Section';

export default function SciaAlternativa ({ id }) {
  return (
    <Section id={id} title="SCIA sostitutiva al PdC" icon={circledot}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
      

         In alternativa la Permesso di costruire oneroso, possono essere realizzati mediante 
         segnalazione certificata di inizio attività onerosa (SCIA onerosa):
         </p>
<ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150">        

<li>gli interventi di ristrutturazione edilizia che portino ad un organismo in tutto o in 
         parte diverso dal precedente nei casi in cui comportino modifiche della volumetria complessiva degli edifici;    
         limitatamente agli immobili compresi nelle zone omogenee A, comportino mutamenti nella 
         destinazione d'uso;</li>
         <li>gli interventi che comportino modificazioni della sagoma o della volumetria complessiva
          degli edifici o dei prospetti di immobili sottoposti a tutela ai sensi del d.lgs.42/2004;</li>
          <li>gli interventi di nuova costruzione o di ristrutturazione urbanistica qualora siano 
         disciplinati da piani attuativi comunque denominati; </li>
         <li>gli interventi di nuova costruzione qualora siano in diretta esecuzione di strumenti 
         urbanistici generali recanti precise disposizioni plano-volumetriche. </li>
 </ul>
         <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
In sintesi gli interventi realizzati mediante SCIA onerosa sono soggetti allo 
stesso regime giuridico e quindi a tutti gli assolvimenti del permesso di 
costruire oneroso,
 compresi ovviamente il pagamento del contributo commisurato all'incidenza
  degli oneri di urbanizzazione, e il contributo commisurato al costo di costruzione
Disciplina della SCIA onerosa
</p>
<p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
La disciplina della SCIA onerosa prevede che il proprietario dell'immobile o l'avente titolo presenta almeno 30 giorni prima, dell'effettivo 
inizio dei lavori allo sportello unico la SCIA onerosa,
 accompagnata dalla documentazione prevista anche dal
permesso di costruire.
<br />
La SCIA onerosa è sottoposta al termine massimo di 
efficacia pari a tre anni dalla data di inizio lavori;
può essere richiesta una proroga; in mancanza la 
realizzazione della parte non ultimata dell'intervento è subordinata a nuova SCIA. 
<br /> 
in regime di SCIA onerosa che riguardino 
immobili sottoposti a vincoli relativi all'assetto idrogeologico, 
ambientali, paesaggistici o culturali è subordinata
 al preventivo rilascio del parere o dell'autorizzazione da parte dell'ente preposto.
 </p>
      </article>
    </Section>
  )
}