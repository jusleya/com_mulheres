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
    console.log(req);
    let name = req.body['name'];
    let email = req.body['email'];
    let subject = req.body['subject'];
    let message = req.body['message'];

    let sendmail = {
      from: email, // Quem enviou este e-mail
      to: 'com.mulheres@gmail.com', // Quem receberá`
      subject: subject,  // Um assunto bacana :-)
      html: `<p>Nome: ` + name + `</p><p>Email: ` + email + `</p><p>Assunto: ` + subject + `</p><p>Mensagem: ` + message + `</p>`,
    };

    transporter.sendMail(sendmail, (error, info) => {
      if(error){
        res.json({error: error});
      }else{
        res.json({success: info.response});
      };
    });
  });
});