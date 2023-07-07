const express = require('express');
const path = require('path');

const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Set your desired port number

// Middleware to parse JSON data
app.use(express.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, phone } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'savytskyimark@gmail.com',
      pass: 'Markmark161616',
    },
  });

  app.use(express.static(path.join(__dirname, 'build')));

  // Define a route handler for the primary path
  app.get('/', (req, res) => {
    // Send the index.html file from the build directory
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  // Define the email options
  const mailOptions = {
    from: 'savytskyimark@gmail.com',
    to: 'dorozhe.zolota777@gmail.com', // Set the recipient email address
    subject: 'Form Submission',
    text: `Name: ${name}\nPhone: ${phone}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// "homepage": "https://marksavytskyi.github.io/anne-project/",
