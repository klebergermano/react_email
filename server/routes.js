const express = require("express");
const sendNodemailer = require("./nodemailer/sendNodemailer");

const app = express.Router();

//receive the form POST and call nodemailer to send
app.post("/form", async (req, res, next) => {
  //Create the html body to send by email
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

  sendNodemailer(msg_html); // send the message by email using nodemailer
});

//Exports the routes collection to server.js
module.exports = app;
