const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Reservation = sequelize.define(
  "Reservation",
  {
    reservation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "restaurant_tables",
        key: "table_id",
      },
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "customers",
        key: "cus_id",
      },
    },
    reservation_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: "Active",
      allowNull: false,
    },
  },
  {
    tableName: "reservations",
    timestamps: false,
  }
);

module.exports = Reservation;
