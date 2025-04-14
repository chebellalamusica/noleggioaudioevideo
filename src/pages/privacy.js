// pages/privacy.js
import Head from 'next/head';
import Layout from '../components/layout/Layout'; // Importa il tuo layout esistente
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Privacy() {
  return (
    <Layout noHeader>
      <Head>
        <title>Informativa Privacy - Arch. Francesco Balestra</title>
      </Head>

      <div className="privacy-policy max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Informativa sulla Privacy</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Titolare del Trattamento</h2>
            <p>
              Arch. Francesco Balestra<br />
              Via XX Settembre, 35122 Padova (PD)<br />
              P.IVA: 05641180285 <br />
              Email: francescobalestrapd@gmail.com<br />
              Tel: +39 346 7923442
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Dati Raccolti</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dati di contatto:</strong> Nome, email, telefono forniti tramite modulo contatto</li>
              <li><strong>Dati tecnici:</strong> Indirizzo IP, browser, orario accesso (raccolti automaticamente)</li>
              <li><strong>Cookie:</strong> Solo tecnici necessari al funzionamento del sito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Finalità del Trattamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risposta a richieste di informazioni</li>
              <li>Erogazione servizi professionali</li>
              <li>Obblighi contabili/fiscali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Base Giuridica</h2>
            <ul className="list-disc pl-6">
              <li>Esecuzione contratti professionali (art. 6.1.b GDPR)</li>
              <li>Legittimo interesse (art. 6.1.f GDPR)</li>
              <li>Consenso esplicito per cookie non tecnici</li>
            </ul>
          </section>

          <section>
  <h2 className="text-xl font-semibold mb-3"> Diritti dell&apos;Interessato</h2>
  <p>
    Puoi esercitare i diritti GDPR (accesso, rettifica, cancellazione, limitazione, 
    opposizione, portabilità) scrivendo a <br />
    <a 
                href="mailto:francescobalestrapd@gmail.com" 
                className="text-[#A0D1F6] hover:underline"
              >
                 francescobalestrapd@gmail.com
              </a>
  </p>
</section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Sicurezza Dati</h2>
            <p>
              Utilizziamo certificati SSL, backup crittografati e accessi protetti da password. 
              I dati vengono conservati per 10 anni come richiesto dagli obblighi contabili.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Hosting</h2>
            <p>
              Il sito è ospitato su Vercel Inc. (USA) che aderisce al framework EU-US DPF. 
              Maggiori info: {' '}
              <a 
                href="https://vercel.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A0D1F6] hover:underline"
              >
                Privacy Policy Vercel
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-8">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl mt-8 mb-12 text-center">
        <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#A0D1F6] text-white px-6 py-3 rounded-lg hover:bg-[#D8EFFD] transition-colors text-lg"
        >
            <Home className="w-5 h-5" />
            Torna alla Pagina Principale
        </Link>
      </div>
      
    </Layout>
  );
}