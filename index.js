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


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.json())
app.use(express.urlencoded());
app.use(session({secret:"abc"}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))


var { add_usuario } = require('./controller/cadastrar')
//const { ler_json } = require('./model/req')
//const { update_data } = require('./model/update-data')

app.listen(port, () => {
    console.log(`Tudo acontece em http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('./index.html')
})

app.post('/cadastrar', (req, res) => {
    add_usuario()
    res.render('./index.html')
})

app.post('/logar', (req, res) => {
    const usuarioscad = fs.readFileSync('./model/usuario.json')
    const usuariosparse = JSON.parse(usuarioscad)

    var email = req.body.emails
    var senha = req.body.senha


    for (var Usuario of usuariosparse) {
        if (email == Usuario.email && senha == Usuario.senha) {
            req.session.email = Usuario
            res.send('conectado')
            return
        }


    }
    //res.send('Error 404')

})









