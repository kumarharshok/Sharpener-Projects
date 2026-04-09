const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pros: {
        type: DataTypes.STRING
    },
    cons: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'user',
    timestamps: false
})

module.exports = user;