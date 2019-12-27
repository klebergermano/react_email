function sendNodemailer(msg_html) {
  const nodemailer = require("nodemailer"); //require nodemailer module installed

  /*config of nodemailer in a single object //to import remove the '_example' from configNodemailer_example or
 create a new folder call configNodemailer.js with a object config for nodemailer*/

  const configNodemailer = require("./configNodemailer.js");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport

    /**/ let transporter = nodemailer.createTransport({
      host: configNodemailer.smtp.host,
      port: configNodemailer.smtp.port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: configNodemailer.account.user, // generated ethereal user
        pass: configNodemailer.account.pass // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: configNodemailer.info.from, // sender address
      to: configNodemailer.info.to, // list of receivers
      subject: configNodemailer.info.subject, // Subject line
      html: msg_html // html body
      //text: "Hello world?", // plain text body// alternative to html message
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }

  main().catch(console.error);
}

module.exports = sendNodemailer;
