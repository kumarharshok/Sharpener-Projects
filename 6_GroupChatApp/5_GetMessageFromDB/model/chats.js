const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const chats = sequelize.define('chats', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    tableName: 'chats',
    timestamps: true
})

module.exports = chats;