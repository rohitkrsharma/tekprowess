const nodemailer = require('nodemailer');
require('dotenv').config(); // Only for local dev

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    from_name, from_email, phone,
    company, company_size, country,
    service, custom_service, message
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });

  const mailOptions = {
    from: `"${from_name}" <${from_email}>`,
    to: 'rsharm8986@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Company Size:</strong> ${company_size}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Service:</strong> ${service === 'other' ? custom_service : service}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#f0f0f0;padding:10px;border-radius:5px;">${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
};
