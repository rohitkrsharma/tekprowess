const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider or SMTP server here
  auth: {
    user: 'rohtmystic@gmail.com', // Your email
    pass: 'qyji vxjf ofwr kxza', // Your email password or app-specific password
  }
});

// POST route to send email
app.post('/send-email', (req, res) => {
  const { from_name, from_email, phone, company, company_size, country, service, message } = req.body;

  const mailOptions = {
    from: from_email,
    to: 'info@tekprowess.com',
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Company Size:</strong> ${company_size}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color:#f0f0f0; padding:10px; border-radius:5px;">
        ${message}
      </p>
    `
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
