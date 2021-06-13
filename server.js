const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
    res.render('index');
})

app.get('/add_user',(req,res) => {
    res.render('add_user');
})

app.listen(3000,() => console.log("server is running in port 3000"));