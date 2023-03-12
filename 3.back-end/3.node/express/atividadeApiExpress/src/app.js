const express = require('express'); 
const movies = require('./movies.json');
const app = express(); 

app.use(express.json()); 

app.get('/movies', (req, res) => {
    res.send(movies)
});

module.exports = app;