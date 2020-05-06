const mailConfig = require('../config/mail.config');
const nodeMailer = require('nodemailer');
const xoauth2 = require('xoauth2');

exports.sendMail = async (request, response) => {
  const mailOptions = {
    from: mailConfig.USER,
    to: 'leyo.yves@gmail.com',
    subject: `FORMULAIRE DE CONTACT`,
    text: 'ceci est un test merci'
  }

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 25,
    secure: false, // use SSL
    auth: {
      user: mailConfig.USER,
      pass: mailConfig.PASSWORD
    }
  });

  const mailResponse = await transporter.sendMail(mailOptions);

  return {
    report: mailResponse.response,
    rejected: mailResponse.rejected
  }

}