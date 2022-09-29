const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("CTalentos", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Conectado ao banco de dados")
;
}).catch(function () {
    console.log("erro");
});

module.exports = sequelize;