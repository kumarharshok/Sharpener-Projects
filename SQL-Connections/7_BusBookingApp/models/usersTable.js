const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const userTable = sequelize.define('userTable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
},{
    tableName: 'Users',
    timestamps: false
})

module.exports = userTable;