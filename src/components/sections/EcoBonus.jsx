import { SunSnow} from 'lucide-react';
import Section from '../ui/Section';

export default function EcoBonus ({ id }) {
  return (
    <Section id={id} title="EcoBonus" icon={SunSnow}>
      <article className="space-y-2">
        <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
        L&apos;Ecobonus è un&apos;agevolazione fiscale (detrazione IRPEF o IRES) 
        da ripartire in 10 rate annuali di pari importo, riconosciuta per
         i lavori di riqualificazione energetica dell&apos;immobile effettuati sia su edifici unifamiliari sia nei condomini.</p>
         <p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
         L&apos;incentivo si concentra sugli interventi che comportano una riduzione del
 consumo energetico per il riscaldamento, con l&apos;ottenimento anche di notevoli 
 risparmi economici conseguenti al miglioramento delle prestazioni termiche dell&apos;edificio.
</p>
<p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
l&apos;attestato di prestazione energetica (APE), finalizzato ad acquisire i dati relativi 
all&apos;efficienza energetica dell&apos;edificio. Tale certificazione è prodotta dopo l&apos;esecuzione
 degli interventi. L&apos;APE non è richiesto per i seguenti interventi:
</p>
<ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150"> 
<li>
per la sostituzione di finestre comprensive di infissi in singole unità immobiliari e l&apos;installazione di pannelli solari per la produzione di acqua calda;
</li><li>
per la sostituzione di impianti di climatizzazione invernale con impianti dotati di caldaie a condensazione e contestuale messa a punto del sistema di distribuzione;
</li><li>
acquisto e posa in opera delle schermature solari;
</li><li>
installazione di impianti di climatizzazione dotati di generatori di calore alimentati da biomasse combustibili, se le detrazioni sono richieste per la sostituzione di impianti di climatizzazione invernale (comma 347 della legge 296/2006);
</li><li>
acquisto e installazione di dispositivi multimediali.
</li></ul>
<p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
Bonus ristrutturazioni: il bonus spetterà:
</p>
<ul className="text-[17px] text-[#5F5F5F] list-disc space-y-3 pl-8 animate-wave delay-150"> 
<li>
nel 2025 al 50% per l&apos;abitazione principale del proprietario o del titolare di diritti reali e al 36% per le altre abitazioni e al, sino ad un massimo di spese pari a 96.000 euro,
</li><li>
nel 2026-2027 al 36% per l&apos;abitazione principale del proprietario o del titolare di diritti reali, e al 30% per le altre abitazioni sino ad un massimo di spese pari a 96.000 euro,
</li><li>
dal 2028 al 2033 al 30% a prescindere se si tratti, o meno, di abitazione principale, sino ad un massimo di spese pari a 48.000 euro,
</li><li>
dal 2034 al 36% nel limite di spese massimo pari a 48.000 euro (detrazione a regime prevista dall&apos;art.16-bis del TUIR &apos; DPR 917/1986);
</li><li>
La detrazione per gli interventi di recupero edilizio non è cumulabile con l&apos;agevolazione fiscale prevista per gli stessi interventi dalle disposizioni sulla riqualificazione energetica degli edifici.
</li></ul>
<p className="text-[17px] text-[#5F5F5F] animate-wave delay-150">
Pertanto, nel caso in cui gli interventi realizzati rientrino sia nelle agevolazioni per la riqualificazione energetica che in quelle per le ristrutturazioni edilizie, il contribuente può fruire, per le medesime spese, soltanto dell’uno o dell’altro beneficio.        
</p>
     
      </article>
    </Section>
  )
}