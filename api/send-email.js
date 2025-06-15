const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract data from the request body
  const { from_name, from_email, phone, company, company_size, country, service, custom_service, message } = req.body;

  // Configure the email options
  const mailOptions = {
    from: from_email,
    to: 'rsharm8986@gmail.com', // Replace with your email
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
      <p style="background-color:#f0f0f0; padding:10px; border-radius:5px;">${message}</p>
    `,
  };

  // Create a transporter using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohtmystic@gmail.com', // Replace with your email
      pass: 'qyji vxjf ofwr kxza', // Replace with your email password or app-specific password
    },
  });

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};
