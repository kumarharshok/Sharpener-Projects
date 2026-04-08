const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const studentTable = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
},{
    tableName:'studentsTable',
    timestamps: false
})

module.exports = studentTable;