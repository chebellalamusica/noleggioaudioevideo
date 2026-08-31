import Input from '../ui/Input';
import { useState } from 'react';

export default function ContactForm({ selectedSummary = '—' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Compila Nome, Email e Messaggio');
      return;
    }

    setLoading(true);
    try {
      // Invia anche il riepilogo selezionato
      const body = { ...form, service: selectedSummary };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || 'Errore invio');

      setSent(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      setError(err.message || 'Errore di rete');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Input label="Nome" id="name" name="name" value={form.name} onChange={handleChange} required />
      <Input label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Input label="Telefono" id="phone" name="phone" value={form.phone} onChange={handleChange} />
      <Input label="Oggetto" id="subject" name="subject" value={form.subject} onChange={handleChange} />
      <Input label="Messaggio" id="message" name="message" type="textarea" rows={5} value={form.message} onChange={handleChange} required />

      {/* Visualizzazione Riepilogo Selezione per l'utente */}
      <div className="p-3 bg-[#f5f6fa] border border-[#e8eaed] rounded-xl text-sm text-[#2d2d2d]">
        <span className="font-bold text-[#1a1a1a]">Riepilogo selezione:</span> {selectedSummary}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-[#ff8c00] text-white font-extrabold text-base rounded-xl shadow-md hover:bg-[#e67e00] transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
      >
        {loading ? 'Invio…' : 'Invia richiesta'}
      </button>

      {sent && (
        <div className="text-[#ff8c00] text-center font-bold animate-fadeUp">
          Messaggio inviato! Ti risponderemo presto.
        </div>
      )}
      {error && (
        <div className="text-red-600 text-center font-bold animate-fadeUp">
          {error}
        </div>
      )}
    </form>
  );
}