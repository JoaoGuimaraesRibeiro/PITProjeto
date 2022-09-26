var { update_data } = require('../model/update-data.js')
var { data } = require('../model/req.js')

module.exports = { add_usuario }
function add_usuario(body) {
    try {
        var { email_usuario, senha_usuario, confsenha_usuario } = body

        const novo_usuario = {
            "email": email_usuario,
            "senha": senha_usuario,
            "confsenha": confsenha_usuario
        }

        data.push(novo_usuario)

        return update_data(data)

    }
    catch (e) {
        return 'erro no add_usuario'
    }
}