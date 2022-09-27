const express = require('express')
const app = express()
const port = 9000

const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const path = require('path')
const fs = require("fs");
const session = require('express-session')
const http = require('http')

require('./model/db')
require('./model/user')


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.json())
app.use(express.urlencoded());
app.use(session({ secret: "abc" }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


const {add_usuario} = require('./controller/cadastrar')


//iniciar servidor
app.listen(port, () => {
    console.log(`Tudo acontece em http://localhost:${port}`)
})

//renderizar página
app.get('/', (req, res) => {
    res.render('./index.html')
})

//cadastrar
app.post('/cadastrar', (req, res) => {
    let body = req.body
    add_usuario(body)
    res.redirect(req.get('referer'));
})

//logar









