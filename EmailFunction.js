const nodemailer = require('nodemailer');

const sendContactFormEmail = (emailParams) => {
  const mailOptions = {
    from: emailParams?.from_email,
    to: 'rsharm8986@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${emailParams?.from_name}</p>
      <p><strong>Email:</strong> ${emailParams?.from_email}</p>
      <p><strong>Phone:</strong> ${emailParams?.phone}</p>
      <p><strong>Company:</strong> ${emailParams?.company}</p>
      <p><strong>Company Size:</strong> ${emailParams?.company_size}</p>
      <p><strong>Country:</strong> ${emailParams?.country}</p>
      <p><strong>Service:</strong> ${emailParams?.service}</p>
      <p><strong>Message:</strong></p>
      <p style="background-color:#f0f0f0; padding:10px; border-radius:5px;">
        ${emailParams?.message}
      </p>
    `
  };

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your mail service
    auth: {
      user: 'rohtmystic@gmail.com', // Your email here
      pass: 'qyji vxjf ofwr kxza' // Your email password here
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email');
    }
    console.log('Email sent: ' + info.response);
  });
};

module.exports = sendContactFormEmail;
