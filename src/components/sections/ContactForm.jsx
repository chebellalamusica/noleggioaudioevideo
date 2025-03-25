import { Send } from 'lucide-react';
import Section from '../ui/Section';
import Input from '../ui/Input';

export default function ContactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();

		// Ottieni i dati dal form
		const formData = new FormData(e.target);
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');

		// Crea l'URL mailto con i dati del form
		const mailtoUrl = `mailto:francescobalestrapd@email.com?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(`Da: ${name}\nEmail: ${email}\n\n${message}`)}`;

		// Apri il client di posta predefinito
		window.location.href = mailtoUrl;
	};

	return (
		<Section id="contatti" title="Contattami" icon={Send}>
			<form onSubmit={handleSubmit} className="space-y-6">
				<Input label="Nome" id="name" required />
				<Input label="Email" id="email" type="email" required />
				<Input label="Oggetto" id="subject" required />
				<Input label="Messaggio" id="message" type="textarea" rows="5" required />
				<button
					type="submit"
					className="inline-flex items-center gap-2 bg-[#A0D1F6] text-white px-4 py-2 rounded-lg hover:bg-[#D8EFFD] transition-colors"
				>
					<Send size={18} /> Invia messaggio
				</button>
			</form>
		</Section>
	);
}
