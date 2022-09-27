const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("CTalentos", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("conectado")
;
}).catch(function () {
    console.log("erro");
});

module.exports = sequelize;