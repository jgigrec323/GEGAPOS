const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    user_pin_code: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_type: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;