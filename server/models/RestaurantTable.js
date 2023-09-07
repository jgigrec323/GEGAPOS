const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const RestaurantTable = sequelize.define('RestaurantTable', {
    table_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    table_section: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    table_number: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    is_table_free: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    customer_on_table_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'customers',
            key: 'cus_id'
        }
    }
}, {
    tableName: 'restaurant_tables',
    timestamps: false
});

module.exports = RestaurantTable;