const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MenuLink = sequelize.define('MenuLink', {
    menu_links_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menu_link_text: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    menu_visibility: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    }
}, {
    tableName: 'menu_links'
});

module.exports = MenuLink;