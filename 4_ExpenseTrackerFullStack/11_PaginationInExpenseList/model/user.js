const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPrimeuser: {
        type: DataTypes.BOOLEAN
    },
    totalExpenses: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'user',
    timestamps: true
})

module.exports = user;