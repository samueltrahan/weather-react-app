const express = require('express')
const cors = require('cors')
const twilio = require('twilio');

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN
const client = (accountSid, authToken)

const app = express(); //alias

app.use(cors()); //blocks the browser from restricting any data

//welcome page for the server
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server');
})

app.get('/send-text', (req, res) => {
    const { recipient,textmessage } = req.query

    client.messages.create({
            body: textmessage,
            to: recipient,
            from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
          }).then((message) => console.log(message.body))
    });

app.listen(4000, () => console.log('Running on port 4000'))