const express = require('express');
const atividade = require('./data/atividade');
const app = express();

app.use(express.json());

// endpoint para trazer a minha requisicao
 app.get('/tasks', (req, res) => {
   res.send(atividade)
}) 
//endpoint para inserir um objeto no meu banco de dados 
app.post('/tasks', (req, res) => {
  const taks = req.body
  const id = atividade.lenght + 1;
  atividade.push({id, ...taks});
  console.log(taks)
})


module.exports = app;