// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

require('dotenv').config();

exports.enviarEmail = functions.https.onRequest((req, res) => {
  
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PWD,
    } 
  });
  
  cors(req, res, () => {
    let subject = req.body['subject'];
    let remetente = req.body['remetente'];
    let message = req.body['message'];


    let email = {
      from: remetente, // Quem enviou este e-mail
      to: 'com.mulheres@gmail.com', // Quem receberá`
      subject: subject,  // Um assunto bacana :-)
      html: 'Remetente: ' + remetente + ' m:' + message
    };

    console.log(email);

    transporter.sendMail(email, (error, info) => {
        if (error) {
          res.json({error : 1});
          return console.error(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({msg : 'Mensagem enviada'});
    });
  });
});