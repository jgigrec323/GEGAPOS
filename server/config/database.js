const Sequelize = require("sequelize")
require('dotenv').config();

const sequelize = new Sequelize("gegapos", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    /*     logging: false
     */
});

module.exports = sequelize;