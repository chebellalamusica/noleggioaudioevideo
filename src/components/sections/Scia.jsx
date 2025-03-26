import { Armchair } from 'lucide-react';
import Section from '../ui/Section';

export default function Scia ({ id }) {
  return (
    <Section id={id} title="SCIA" icon={Armchair}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        Sono realizzabili mediante SCIA gratuita gli interventi di:
         
         manutenzione straordinaria qualora riguardi le parti strutturali dell'edificio o i prospetti;    
         restauro e risanamento conservativo qualora riguardi le parti strutturali dell'edificio;    
         ristrutturazione edilizia, anche con demolizione e ricostruzione, ma senza aumento di volume o sip;    
         ristrutturazione edilizia con cambio di destinazione d'uso, eccettuati gli immobili compresi nelle zone omogenee A;    
      
         ristrutturazione edilizia con modificazioni della sagoma, eccetto gli immobili sottoposti a vincoli a
      sensi del d.lgs. 42/2004.    
        
      Sono, altresì, realizzabili mediante SCIA le varianti a permessi di costruire che:
       
         
      non incidano sui parametri urbanistici e sulle volumetrie; 
          
         
      non modifichino la destinazione d'uso e la categoria edilizia;    
         
      non alterino, se vincolati ai sensi del d.lgs. 42/2004, la sagoma dell'edificio;
          
         
      non violino le eventuali prescrizioni contenute nel permesso di costruire;
          
         
      non si configurino come variante essenziale.    
        
              
      
              Disciplina della segnalazione certificata inizio attività gratuita
              La disciplina della SCIA gratuita prevede che i lavori possono essere iniziati contestualmente alla presentazione con silenzio assenso immediato (salvo diversa indicazione data da l.r.), a condizione che l'intervento edilizio non necessiti di specifici atti di assenso.
            
        </p>
      </article>
    </Section>
  )
}