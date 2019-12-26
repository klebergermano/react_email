const express = require("express");
const nodemailer = require("nodemailer");

const app = express.Router();

app.post("/form", async (req, res, next) => {
  const msg_html = `
  <p>You have a new contact request</p>
  <h3>Details</h3>
  <ul>
  <li>name: ${req.body.name}</li>
  <li>name: ${req.body.email}</li>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  
  </ul>
  `;

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount(); //////////////////////////////////// */

    accountEmail = {
      user: testAccount.user,
      pass: testAccount.pass
    };

    configSMTP = {
      host: "smtp.ethereal.email", //smtp host of your email service
      port: 587
    };

    const infoEmail = {
      from: '"Website form contact" <contact@website.com>', // sender address
      to: " <bar@example.com>, <baz@example.com> ", // list of receivers
      subject: "New contact from the website",
      text: ""
    }; //////////////////////////////////// */ // create reusable transporter object using the default SMTP transport

    /**/ let transporter = nodemailer.createTransport({
      host: configSMTP.host,
      port: configSMTP.port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: accountEmail.user, // generated ethereal user
        pass: accountEmail.pass // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: infoEmail.from, // sender address
      to: infoEmail.to, // list of receivers
      subject: infoEmail.subject, // Subject line
      // text: "Hello world?", // plain text body
      html: msg_html // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

module.exports = app;
