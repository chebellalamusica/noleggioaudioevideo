

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }


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
      subject: `New message from ${name}: ${subject}`,
      text: `Hai ricevuto un nuovo messaggio:\n\nNome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('sendMail result:', info);

    return res.status(200).json({ success: 'Message sent successfully.', info });
  } catch (error) {
    console.error('Errore invio mail:', error);
    return res.status(500).json({ error: 'Failed to send message.', details: error.message });
  }
}