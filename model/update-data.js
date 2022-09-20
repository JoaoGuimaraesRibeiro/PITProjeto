var fs = require('fs')

module.exports = {update_data}
function update_data(new_data){
    try{
        att = fs.writeFileSync('./model/usuario.json', JSON.stringify(new_data))
        console.log('Dicionário atualizado com sucesso')

    }catch(e){
        return 'erro no add_data'
    }
}