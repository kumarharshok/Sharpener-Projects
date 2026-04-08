const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const userTable = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'user',
    timestamps: false
})

module.exports = userTable;
