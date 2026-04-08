const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const userTable = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false
})

module.exports = userTable;