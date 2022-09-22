const fs = require('fs')

function ler_json(){
    let rawdata = fs.readFileSync('./model/usuario.json');
    let resposta = JSON.parse(rawdata)
    return resposta
}

var data = ler_json()
module.exports = {data, ler_json}