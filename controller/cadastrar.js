const User = require('../model/user');

module.exports = {add_usuario}
function add_usuario(body){
    var  tipo = window.document.getElementById('select').value;
    var email = window.document.getElementById('email_usuario').value;
    var senha = window.document.getElementById('senha_usuario').value;

    User.query("INSERT INTO User(tipo, email, senha) VALUES ("+tipo+", "+email+", "+senha+")", function(err, result){
        if(!err){
            window.alert('Usuário cadastrado com sucesso!');
        }else{
            window('Erro ao cadastrar usuario!');
        }
    }); 
}