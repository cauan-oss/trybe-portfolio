const express = require('express');

const app = express();

app.use(express.json());

app.get('/images', (requisao, resposta) => {
    resposta.send('texto testando')
});



module.exports = app;