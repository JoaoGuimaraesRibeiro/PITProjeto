
var { update_data } = require('../model/update-data.js')

module.exports = { add_usuario }
function add_usuario() {
    try {
        var { email_usuario, senha_usuario, confsenha_usuario } = body

        const novo_usuario = {
            "email": email_usuario,
            "name": senha_usuario,
            "confsenha": confsenha_usuario
        }

        data.push(novo_usuario)

        return update_data(data)

    }
    catch (e) {
        return 'erro no add_usuario'
    }
}