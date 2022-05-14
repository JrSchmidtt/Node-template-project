const Sequelize = require('sequelize');
const connection = new Sequelize('DATABASE-NAME','DATABASE-PASSWORD','0808',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;