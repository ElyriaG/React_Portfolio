// require("dotenv").config();
// const authKey = process.env.SENDGRID_API_KEY;

// // const client = require("twilio")(accountSid, authToken);

// // const twilio = {
// //   sendTextMessage: (message, tonumber) => {
// //     if (tonumber) {
// //       client.messages
// //         .create({
// //           body: message,
// //           from: fromPhone,
// //           to: tonumber
// //         })
// //         .then(message => console.log("Message sent", message.sid))
// //         .catch(error => {
// //           console.log(error);
// //         });
// //     }
// //   }
// // };

// // module.exports = twilio;

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(authKey);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);