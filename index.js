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

const User = require('./model/user')
const db = require('./model/db')

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.json())
app.use(express.urlencoded());
app.use(session({ secret: "abc" }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


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
    if (req.body.senha_usuario != req.body.confsenha_usuario) {
        res.send('As senhas estão diferentes!')
    } else if (req.body.senha_usuario == req.body.confsenha_usuario) {
        User.create({
            email: req.body.email_usuario,
            senha: req.body.senha_usuario,
            tipo: req.body.select
        }).then(function () {
            res.redirect(req.get('referer'));
        }).catch(function (err) {
            res.send('Erro ao cadastrar: ' + err)
        })
    }
})

//logar
app.post('/logar', async (req, res) => {
    var email = req.body.email;
    var senha = req.body.senha;

    const user = await User.findOne({
        where:{
            email,
            senha
        }
    })

    if(!user){
        res.send('Email e Senha Inválidos')

    }else{
        res.send('Logado com sucesso')
    }
    });









