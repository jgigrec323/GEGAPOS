const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodMenuCategory = sequelize.define('FoodMenuCategory', {
    foods_menu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menu_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    menu_icon: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    number_items: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'foods_menu_categories'
});

module.exports = FoodMenuCategory;