const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const connection = require('./database/connection');

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.render('index');
})

// database MYSQL


app.listen(8080,() =>{
    console.log('SERVER START !');
})
