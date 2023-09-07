const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodMenuItem = sequelize.define('FoodMenuItem', {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    item_categorie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'foods_menu_categories',
            key: 'foods_menu_id'
        }
    },
    item_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'foods_menu_items',
    timestamps: false
});

module.exports = FoodMenuItem;