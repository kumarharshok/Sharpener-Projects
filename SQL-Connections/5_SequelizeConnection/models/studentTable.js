const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const studentsTable =  sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
},
    {
        tableName: 'Student',
        timestamps: false
    });

module.exports = studentsTable;