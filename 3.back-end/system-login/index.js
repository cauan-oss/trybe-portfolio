const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
const path = require('path');
const app = express();

app.use(session({secret: 'ansdknsandlasndls'}))
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("views"));

 app.post('/',(req, res)=> {
    console.log(req.body.login);
    res.render('index')
 })

 app.get('/', (req, res) => {
  res.render("pageHome")
}) 

app.listen(port, () => {
    console.log('servidor rodando')
});

