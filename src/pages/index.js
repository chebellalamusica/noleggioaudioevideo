'use client';
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/sections/ContactForm';
import { Package, Sparkles, ShieldCheck, Info } from 'lucide-react';

const listinoAttrezzatura = [
  { id: 1, cat: 'CASSE', desc: 'Yamaha DBR 12" (coppia)', valore: '850 € × 2 (1.700 €)', affittoNum: 50, affittoStr: '50 €', cauzioneNum: 150, cauzioneStr: '150 €', image: "/dbr 12'.jpg" },
  { id: 2, cat: 'CASSE', desc: 'Cavo Jack - RCA / Type-C', valore: '15 €', affittoNum: 0, affittoStr: 'Incluso', cauzioneNum: 0, cauzioneStr: '—', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop' },
  { id: 3, cat: 'MIXER', desc: 'Yamaha MG06X', valore: '180 €', affittoNum: 20, affittoStr: '20 €', cauzioneNum: 100, cauzioneStr: '100 €', image: '/MG06X.jpg' },
  { id: 4, cat: 'MIXER', desc: 'Ricevitore Bluetooth (Jack / XLR)', valore: '60 €', affittoNum: 0, affittoStr: 'Incluso', cauzioneNum: 0, cauzioneStr: '—', image: 'https://images.unsplash.com/photo-1611339555312-e607c04352fd?w=300&h=300&fit=crop' },
  { id: 5, cat: 'PROIETTORE', desc: 'Epson EB-FH52', valore: '700 €', affittoNum: 50, affittoStr: '50 €', cauzioneNum: 140, cauzioneStr: '140 €', image: '/epson eb-fh52.jpg' },
  { id: 6, cat: 'PROIETTORE', desc: 'Schermo Proiettore', valore: '130 €', affittoNum: 30, affittoStr: '30 €', cauzioneNum: 0, cauzioneStr: '—', image: 'https://images.unsplash.com/photo-1559056981-0c02155194d0?w=300&h=300&fit=crop' },
  { id: 7, cat: 'MICROFONI', desc: 'AKG WMS 40 Mini Dual (2 unità)', valore: '140 €', affittoNum: 30, affittoStr: '30 € (15 € × 2)', cauzioneNum: 0, cauzioneStr: '—', image: '/microfoni.jpg' },
  { id: 8, cat: 'CAVI & BORSA', desc: 'Cavi Alimentazione & Prolunghe', valore: '~87,50 €', affittoNum: 0, affittoStr: 'Incluso', cauzioneNum: 0, cauzioneStr: '—', image: 'https://images.unsplash.com/photo-1591047989835-2b6b5a44b822?w=300&h=300&fit=crop' },
];

const pacchettiPromo = [
  { id: 'party', nome: 'Pacchetto Party Audio', desc: 'Casse + Mixer + Cavi', items: [1, 2, 3, 4, 8], scontoAffitto: 10, note: 'Sconto leggero su affitto' },
  { id: 'cinema', nome: 'Pacchetto Cinema', desc: 'Proiettore + Schermo + Audio', items: [1, 2, 3, 4, 5, 6, 8], scontoAffitto: 15, note: 'Sconto su set AV' },
  { id: 'full', nome: 'Full Set Evento', desc: 'Tutto incluso', items: [1, 2, 3, 4, 5, 6, 7, 8], scontoAffitto: 25, forfaitCauzione: 300, note: 'Miglior offerta: forfait cauzione'}
];

export default function Home() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activePackageId, setActivePackageId] = useState(null);

  const dependencies = {
    1: [2, 8], 
    3: [4], 
  };

  const reverseDependencies = {
    2: 1, 
    8: 1, 
    4: 3, 
  };

  const toggleItem = (id) => {
    setActivePackageId(null);
    setSelectedItems(prev => {
      const alreadySelected = prev.includes(id);
      let newSelection = alreadySelected ? prev.filter(i => i !== id) : [...prev, id];
      
      if (!alreadySelected && dependencies[id]) {
        newSelection = [...new Set([...newSelection, ...dependencies[id]])];
      }
      
      return newSelection;
    });
  };

  const selectAll = () => {
    setActivePackageId(null);
    setSelectedItems(listinoAttrezzatura.map(i => i.id));
  };

  const deselectAll = () => {
    setActivePackageId(null);
    setSelectedItems([]);
  };

  const applicaPacchetto = (pkg) => {
    setActivePackageId(pkg.id);
    setSelectedItems(pkg.items);
  };

  // 1. Calcolo subtotali grezzi
  const rawTotals = selectedItems.reduce((acc, id) => {
    const item = listinoAttrezzatura.find(i => i.id === id);
    if (item) { 
      acc.affitto += Number(item.affittoNum || 0); 
      acc.cauzione += Number(item.cauzioneNum || 0); 
    }
    return acc;
  }, { affitto: 0, cauzione: 0 });

  // 2. Rilevamento automatico pacchetti corrispondenti
  const matchedPackages = pacchettiPromo.filter(pkg =>
    pkg.items.every(itemId => selectedItems.includes(itemId))
  );

  const bestAutoPackage = matchedPackages.sort((a, b) => b.scontoAffitto - a.scontoAffitto)[0];
  const activePkg = pacchettiPromo.find(p => p.id === activePackageId) || bestAutoPackage;

  const discountAffitto = activePkg ? activePkg.scontoAffitto : 0;
  const finalAffitto = Math.max(0, rawTotals.affitto - discountAffitto);

  // 3. Cauzione: applicazione automatica forfait a 300 € se la somma supera 300 €
  const isForfaitActive = rawTotals.cauzione > 300;
  const finalCauzione = isForfaitActive ? 300 : rawTotals.cauzione;
  const risparmioCauzione = rawTotals.cauzione - 300;

  return (
    <Layout>
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-6 text-center">
        <span className="inline-block mb-3 px-3 py-1 bg-[#f5f6fa] text-[#ff8c00] font-semibold text-xs uppercase rounded-full border border-[#e8eaed]">
          Noleggio Impianti Audio & Video
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#1a1a1a]">LISTINO NOLEGGIO ATTREZZATURA</h1>
        <p className="text-base text-[#2d2d2d] max-w-2xl mx-auto font-medium">Scegli tra pacchetti consigliati oppure personalizza il set spuntando i singoli articoli. Sotto trovi il riepilogo dei costi e le note sul deposito cauzionale.</p>
      </header>

      {/* Sezione Pacchetti con ID per l'ancora */}
      <section id="pacchetti" className="max-w-6xl mx-auto px-6 py-6 scroll-mt-20">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#1a1a1a]">
          <Package className="w-5 h-5 text-[#ff8c00]"/> Pacchetti consigliati
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pacchettiPromo.map(p => {
            const isSelected = activePkg?.id === p.id;
            return (
              <button 
                key={p.id} 
                onClick={() => applicaPacchetto(p)} 
                className={`text-left p-5 rounded-xl border transition-all relative ${isSelected ? 'bg-[#fff4e6] border-[#ff8c00] shadow-md ring-2 ring-[#ff8c00]/20' : 'bg-white border-[#d1d5db] hover:shadow-lg hover:border-[#ff8c00]'}`}
              >
                {isSelected && (
                  <span className="absolute top-3 right-3 text-xs bg-[#ff8c00] text-white px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Attivo
                  </span>
                )}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-sm text-[#ff8c00] font-bold uppercase">Promo</div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]">{p.nome}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#2d2d2d] mb-3">{p.desc}</p>
                <div className="text-sm text-[#ff8c00] font-bold">Sconto affitto: {p.scontoAffitto ? p.scontoAffitto + ' €' : '—'}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Sezione Listino con ID per l'ancora */}
      <section id="listino" className="max-w-7xl mx-auto px-6 py-4 scroll-mt-20">
        <div className="bg-white border border-[#d1d5db] rounded-2xl overflow-hidden p-6 shadow-sm">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-sm font-extrabold text-[#1a1a1a] tracking-wide">PERSONALIZZA IL SET - LISTINO COMPLETO</div>
            <div className="flex items-center gap-3">
              <button onClick={selectAll} className="text-sm px-3 py-1.5 rounded-lg bg-[#f5f6fa] text-[#1a1a1a] font-semibold border border-[#d1d5db] hover:bg-[#e8eaed] transition-colors cursor-pointer">Seleziona tutto</button>
              <button onClick={deselectAll} className="text-sm px-3 py-1.5 rounded-lg bg-[#f5f6fa] text-[#1a1a1a] font-semibold border border-[#d1d5db] hover:bg-[#e8eaed] transition-colors cursor-pointer">Deseleziona</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listinoAttrezzatura.map(item => {
              if (reverseDependencies[item.id]) return null;

              const checked = selectedItems.includes(item.id);
              const childrenIds = dependencies[item.id] || [];
              
              return (
                <div key={item.id} className={`border rounded-xl overflow-hidden transition-all ${checked ? 'bg-[#fff4e6] border-[#ff8c00] shadow-md' : 'bg-white border-[#d1d5db] hover:shadow-md'}`}>
                  {/* Contenitore immagine con object-contain, padding e animazione di riduzione morbida */}
                  <div className="w-full h-48 bg-white overflow-hidden flex items-center justify-center border-b border-[#e8eaed] p-3">
                    <img 
                      src={item.image} 
                      alt={item.desc} 
                      className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-[0.92] cursor-pointer" 
                    />
                  </div>
                  
                  <div className="p-4 bg-white">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-xs font-bold text-[#ff8c00] uppercase mb-1 tracking-wide">{item.cat}</div>
                        <h4 className="font-bold text-[#1a1a1a] text-sm">{item.desc}</h4>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={() => toggleItem(item.id)} 
                        className="w-5 h-5 mt-1 cursor-pointer flex-shrink-0 accent-[#ff8c00]"
                      />
                    </div>

                    <div className="flex gap-3 mt-3 items-start">
                      <div className="flex-1 space-y-1 text-xs">
                        <div className="text-[#1a1a1a]">
                          <span className="font-bold">Affitto:</span> <span className="text-[#ff8c00] font-extrabold">{item.affittoStr}</span>
                        </div>
                        <div className="text-[#2d2d2d]">
                          <span className="font-semibold">Cauzione:</span> {item.cauzioneStr}
                        </div>
                      </div>

                      {childrenIds.length > 0 && (
                        <div className="flex-1 border-l border-[#d1d5db] pl-3">
                          {childrenIds.map(childId => {
                            const childItem = listinoAttrezzatura.find(i => i.id === childId);
                            return (
                              <div key={childId}>
                                <div className="text-xs text-[#ff8c00] font-bold italic mb-1">IN OMAGGIO</div>
                                <div className="text-xs font-semibold text-[#1a1a1a]">{childItem.desc}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border-2 border-[#ff8c00] shadow-md">
            <h4 className="text-lg font-extrabold text-[#1a1a1a] mb-1 text-center">Preventivo Selezionato</h4>
            {activePkg && (
              <p className="text-center text-xs font-bold text-[#ff8c00] mb-4 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Sconto applicato: {activePkg.nome} (-{activePkg.scontoAffitto} €)
              </p>
            )}
            
            <div className="flex justify-between items-center py-2 border-b border-[#e8eaed]">
              <span className="text-sm font-bold text-[#2d2d2d]">Totale Affitto:</span>
              <div className="text-xl font-extrabold text-[#ff8c00] flex items-center gap-2">
                {discountAffitto > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 font-normal text-base">{rawTotals.affitto} €</span>
                    <span>{finalAffitto} €</span>
                  </div>
                ) : (
                  <span>{rawTotals.affitto} €</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-[#e8eaed]">
              <span className="text-sm font-bold text-[#2d2d2d]">Cauzione Richiesta:</span>
              <div className="text-lg font-bold text-[#1a1a1a] flex items-center gap-2">
                {isForfaitActive ? (
                  <div className="flex items-center gap-2">
                    <span className="line-through text-gray-400 font-normal text-base">{rawTotals.cauzione} €</span>
                    <span className="text-[#ff8c00] font-extrabold">300 € (Forfait)</span>
                  </div>
                ) : (
                  <span>{finalCauzione} €</span>
                )}
              </div>
            </div>

            <div className={`mt-4 p-4 rounded-xl border transition-all ${
              isForfaitActive 
                ? 'bg-[#fff4e6] border-[#ff8c00]' 
                : 'bg-[#f8f9fa] border-[#d1d5db]'
            }`}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold flex items-center gap-1.5 text-[#1a1a1a]">
                  {isForfaitActive ? (
                    <ShieldCheck className="w-4 h-4 text-[#ff8c00]" />
                  ) : (
                    <Info className="w-4 h-4 text-gray-400" />
                  )}
                  Opzione Forfait Cauzione Ridotta (300 €)
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                  isForfaitActive 
                    ? 'bg-[#ff8c00] text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {isForfaitActive ? 'Attivo' : 'Inattivo'}
                </span>
              </div>
              
              <p className="text-xs text-[#2d2d2d] leading-relaxed">
                {isForfaitActive ? (
                  <>
                    <strong className="text-[#ff8c00]">Soglia di 300 € superata!</strong> La somma delle cauzioni sarebbe di {rawTotals.cauzione} €, ma il forfait ha bloccato l&apos;importo massimo a <strong>300 €</strong> (risparmi {risparmioCauzione} € di cauzione).
                  </>
                ) : (
                  <>
                    Si attiva automaticamente non appena la cauzione supera i 300 €. <br/>
                    <span className="font-semibold text-gray-500">Stato attuale cauzione: {rawTotals.cauzione} € / 300 €</span>
                  </>
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="contatti" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-20">
        <div className="p-8 rounded-2xl border-2 border-[#ff8c00] bg-white shadow-lg">
          <div className="mb-6 text-center border-b border-[#e8eaed] pb-4">
            <h3 className="text-2xl font-extrabold text-[#1a1a1a]">Richiesta Preventivo / Contatto</h3>
            <p className="text-sm font-semibold text-[#ff8c00] mt-1">Invia il modulo per confermare la disponibilità delle date</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}