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

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    // Controllo configurazione email
    if (!emailUser || !emailPass) {
      console.error('EMAIL_USER or EMAIL_PASS is not set on the deployed server.');
      return res.status(500).json({
        error: 'Configurazione email mancante sul server di produzione.',
        details: 'Imposta EMAIL_USER, EMAIL_PASS e, se serve, EMAIL_TO nelle variabili d\'ambiente del tuo host.'
      });
    }

    // Preparazione dati per l'invio
    const contactData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      subject: subject || 'Richiesta di contatto dal sito web',
      message: String(message).trim(),
      service: service || 'Non specificato',
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'Unknown',
      userAgent: req.headers['user-agent'] || 'Unknown'
    };

    // Invio reale con Nodemailer
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: `"${contactData.name}" <${emailUser}>`,
      to: emailTo,
      replyTo: contactData.email,
      subject: `[Sito Web] ${contactData.subject}`,
      text: [
        'Hai ricevuto un nuovo messaggio dal sito web:',
        '',
        `Nome: ${contactData.name}`,
        `Email: ${contactData.email}`,
        `Telefono: ${contactData.phone || 'Non inserito'}`,
        `Servizio: ${contactData.service}`,
        `Data: ${new Date(contactData.timestamp).toLocaleString('it-IT')}`,
        '',
        'Messaggio:',
        contactData.message
      ].join('\n'),
      html: `
        <h2>Nuova richiesta di contatto dal sito web</h2>
        <p><strong>Nome:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Telefono:</strong> ${contactData.phone || 'Non inserito'}</p>
        <p><strong>Servizio:</strong> ${contactData.service}</p>
        <p><strong>Data:</strong> ${new Date(contactData.timestamp).toLocaleString('it-IT')}</p>
        <h3>Messaggio:</h3>
        <div style="background:#f5f5f5;padding:16px;border-radius:8px;">${contactData.message.replace(/\n/g, '<br>')}</div>
        <hr />
        <p style="font-size:12px;color:#666;">IP: ${contactData.ip}<br />User Agent: ${contactData.userAgent}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email inviata correttamente:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Messaggio inviato con successo',
      data: {
        id: info.messageId,
        timestamp: contactData.timestamp
      }
    });
  } catch (error) {
    console.error('Errore nell\'invio del messaggio di contatto:', error);
    return res.status(500).json({
      error: 'Errore interno del server',
      message: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Funzione per salvare nel database (opzionale)
async function saveContactRequest(contactData) {
  // Implementazione del salvataggio nel database
  // MongoDB, PostgreSQL, MySQL, ecc.
  console.log('Salvataggio nel database simulato per:', contactData.email);
}

// Funzione per formattare la data
import { formatDate } from '../../lib/utilities';
