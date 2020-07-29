const express = require('express');
const cors = require('cors');
const Twilio = require('twilio');
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = new Twilio(
   accountSid,
   authToken
  );

const app = express(); //alias

app.use(cors()); //blocks the browser from restricting any data

//welcome page for the server
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server');
});

app.get('/send-text', (req, res) => {
  const { recipient, textmessage } = req.query;

  twilioClient.messages
    .create({
      body: textmessage,
      to: '+1' + recipient,
      from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then(message => console.log(message.body));
});

app.listen(4000, () => console.log('Running on port 4000'));
