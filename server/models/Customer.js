const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
    cus_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cus_firstname: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    cus_lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'customers',
    timestamps: false
});

module.exports = Customer;