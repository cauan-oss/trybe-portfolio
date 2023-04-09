const express = require('express');

const app = express();

app.use(express.json());

app.get('/port', (req, res) => {
  res.send("acessando pelo google")
})

module.exports = app