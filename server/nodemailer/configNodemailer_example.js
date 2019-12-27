const configNodemailer = {
  account: {
    user: "you_email_user@email.com",
    pass: "your_email_password"
  },
  smtp: {
    host: "smtp-mail.outlook.com", //smtp host of your email service// as exaple was used the Microsoft Outlook smtp service
    port: 587 //port of smtp service/ 587 is the most common
  },

  info: {
    from: '"Website form contact <>"', // sender address
    to: " <you_email_user01@email.com>, <you_email_user02@email.com>", // list of receivers // you can config to send to more than one
    subject: "New contact from the website"
  }
};

module.exports = configNodemailer;
