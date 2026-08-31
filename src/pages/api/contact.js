// API per gestire i messaggi di contatto
export default async function handler(req, res) {
  // Abilita CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo metodo POST consentito
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const { name, email, phone, subject, message, privacy, service } = req.body;

    // Validazione campi obbligatori
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Campi obbligatori mancanti',
        details: 'Nome, email e messaggio sono obbligatori'
      });
    }

    // Preparazione dati per l'invio
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject || 'Richiesta di contatto dal sito web',
      message: message.trim(),
      service: service || 'Non specificato',
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Unknown',
      userAgent: req.headers['user-agent'] || 'Unknown'
    };

    // Log per debugging (in produzione usare un logger appropriato)
    console.log('Nuova richiesta di contatto ricevuta:', {
      timestamp: contactData.timestamp,
      email: contactData.email,
      
    });

// Invio reale con Nodemailer
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
if (!emailUser || !emailPass) {
  console.error('EMAIL_USER or EMAIL_PASS is not set:', { emailUser, emailPass });
  return res.status(500).json({ error: 'Email configuration missing on server.' });
}

try {
  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.default.createTransport({
    service: 'Gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: emailUser,
    to: emailUser,
    subject: `[Sito Web] ${contactData.subject}`,
    text: `Hai ricevuto un nuovo messaggio dal sito web:\n\nNome: ${contactData.name}\nEmail: ${contactData.email}\nData: ${formatDate(contactData.timestamp, { hour: '2-digit', minute: '2-digit' })}\n\nMessaggio:\n${contactData.message}`,
    html: `<h2>Nuova richiesta di contatto dal sito web</h2><p><strong>Nome:</strong> ${contactData.name}</p><p><strong>Email:</strong> ${contactData.email}</p><p><strong>Data e ora:</strong> ${formatDate(contactData.timestamp, { hour: '2-digit', minute: '2-digit' })}</p><h3>Messaggio:</h3><div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${contactData.message.replace(/\n/g, '<br>')}</div><hr><p style="font-size: 12px; color: #666;">IP: ${contactData.ip}<br>User Agent: ${contactData.userAgent}</p>`
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('sendMail result:', info);

  return res.status(200).json({
    success: true,
    message: 'Messaggio inviato con successo',
    data: {
      id: info.messageId,
      timestamp: contactData.timestamp
    }
  });
} catch (error) {
  console.error('Errore invio mail:', error);
  return res.status(500).json({ error: 'Failed to send message.', details: error.message });
}

  } catch (error) {
    console.error('Errore nell\'invio del messaggio di contatto:', error);
    
    return res.status(500).json({
      error: 'Errore interno del server',
      message: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// ...existing code...

// Funzione per salvare nel database (opzionale)
async function saveContactRequest(contactData) {
  // Implementazione del salvataggio nel database
  // MongoDB, PostgreSQL, MySQL, ecc.
  console.log('Salvataggio nel database simulato per:', contactData.email);
}

// Funzione per formattare la data
import { formatDate } from '../../lib/utilities';
