const express = require("express");

const app = express.Router();

app.post("/form", async (req, res) => {
  console.log(req.body);
});

module.exports = app;
