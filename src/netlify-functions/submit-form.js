const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Parse the form data from the request body
  const { name, phone } = JSON.parse(event.body);

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'savytskyimark@gmail.com',
      pass: 'Markmark161616',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'savytskyimark@gmail.com',
    to: 'dorozhe.zolota777@gmail.com', // Set the recipient email address
    subject: 'Form Submission',
    text: `Name: ${name}\nPhone: ${phone}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error sending email',
    };
  }
};
