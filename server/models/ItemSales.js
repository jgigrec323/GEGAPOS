const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItemSales = sequelize.define('ItemSales', {
    item_sales_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sales_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'sales_summary',
            key: 'sales_id'
        }
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'foods_menu_items',
            key: 'item_id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'item_sales',
    timestamps: false
});

module.exports = ItemSales;