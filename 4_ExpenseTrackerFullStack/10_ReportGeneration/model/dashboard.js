const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const expenseTable = sequelize.define('expenses', {
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
    },
    isIncome: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    
}, {
    tableName: 'expenses',
    timestamps: true
})

module.exports = expenseTable;