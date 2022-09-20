const express = require('express')
const app = express()
const port = 9000
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const http = require('http')
const path = require('path')
const fs = require("fs");
const session = require('express-session')


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


var {add_usuario} = require('./controller/cadastrar')

app.listen(port, () => {
    console.log(`Tudo acontece em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('./index.html')
})

app.post('/cadastrar', (req, res) =>{
    res.render('./index.html',{
        usuario: add_usuario()
    })
})









