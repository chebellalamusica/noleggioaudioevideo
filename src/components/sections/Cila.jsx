import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function Cila({ id }) {
  return (
    <Section id={id} title="CILA" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        L'articolo 6-bis disciplina le attività di edilizia libera soggette
         a preventiva comunicazione di inizio lavori asseverata (CILA); queste sono
          quelle non disciplinate dagli articoli 6, 10 e 22, e cioè:
          </p>
          <ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150"> 
   
         <li>gli interventi di manutenzione straordinaria, che non riguardino le parti
          strutturali e le modifiche ai prospetti e cioè le opere e le modifiche necessarie
           per rinnovare e sostituire parti degli edifici;</li>
             
            
           <li>frazionamento o accorpamento delle unità immobiliari con esecuzione di opere;</li>
             
            
           <li>gli interventi di restauro e risanamento conservativo che non interessino parti strutturali.
         In questi casi l'interessato, prima di iniziare i lavori, deve trasmettere all'amministrazione
          comunale l'elaborato progettuale (stato di fatto, stato di progetto e raffronti con i gialli e i rossi)
           e la CILA asseverata da un tecnico abilitato.</li>
          </ul>   
          
       
      </article>
    </Section>
  )
}