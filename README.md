# React Email Nodemailer

This is a basic project with React and Nodemailer configured to send emails

---

## About

The project has basicly two parts **Client** and **Server**
In client folder is the boilerplate React created with _"create-react-project"_. Client folder contains the component form.js which has a form with "_handles_" that store the data form in the "_state_" and send this info with a handle Submit function that creates a post request with "_fetch_" to the location "_/form_" so the server can catch it and send with nodemailer.

## Dependecies

> Concurrently, Express, Nodemailer

## How to use

Install all the modules with

```bash
npm install
```

Then run de **Node Server** and the **React Client** with

```bash
npm run dev
```

\* Was necessary remove the "\_example" from the "_configNodemailer_example.js_" to conrrectly import it to sendNodemailer.js

\* Also don't forget to put your own config information in "server/nodemailer/configNodemailer.js"

Nodemaler was configured using the example configuration with some adjusts see more here [Nodemailer Example](https://nodemailer.com/about/)
