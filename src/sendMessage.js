import Twilio from 'twilio'


const twilioClient = new Twilio(
  process.env.REACT_APP_TWILIO_ACCOUNT_SID,
  process.env.REACT_APP_TWILIO_AUTH_TOKEN,
);

const sendMessage = message =>
  twilioClient.messages.create({
    body: message,
    to: process.env.REACT_APP_MY_PHONE_NUMBER,
    from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
  });

export default sendMessage;