const configNodemailer = {
  account: {
    user: "your_email_user@example.com",
    pass: "your_email_password"
  },
  smtp: {
    host: "smtp-mail.outlook.com", //smtp host of your email service// as example was used the Microsoft Outlook smtp service
    port: 587 //port of smtp service/ 587 is the most common
  },

  info: {
    from: '"Website form contact <your_email_user@example.com>"', // sender address
    to: " <you_email_user01@email.com>, <you_email_user02@email.com>", // list of receivers // you can config more than one to receive it
    subject: "New contact from the website"
  }
};

module.exports = configNodemailer;
