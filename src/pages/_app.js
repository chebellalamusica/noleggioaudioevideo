import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Metadati essenziali - Modifica solo i content */}
        <title>FRANCESCO BALESTRA | Architetto IUNIOR - Padova</title>
        <meta name="description" content="Arch. Francesco Balestra - Professionista abilitato per pratiche edilizie, rilievi con drone e consulenze tecniche a Padova. Servizi completi per privati e imprese." />
        <meta name="keywords" content="architetto Padova, pratiche edilizie, SCIA, CILA, permesso costruire, rilievi drone, bonus edilizi" />
        
        {/* Open Graph base */}
        <meta property="og:title" content="FRANCESCO BALESTRA | Architetto Padova" />
        <meta property="og:description" content="Servizi professionali di architettura e pratiche edilizie con sede a Padova" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:url" content="https://linkedin.com/in/francesco-balestra-a0571a162" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.archbalestrafrancesco.it" />
      </Head>
      
      {/* Mantengo intatta la struttura esistente */}
      <Component {...pageProps} />
    </>
  );
}