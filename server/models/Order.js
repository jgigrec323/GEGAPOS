const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'customers',
            key: 'cus_id'
        }
    },
    item_bought_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'foods_menu_items',
            key: 'item_id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'orders'
});

module.exports = Order;