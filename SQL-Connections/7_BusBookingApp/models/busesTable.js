const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const busesTable = sequelize.define('busesTable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bus_name: {
        type: DataTypes.STRING
    },
    total_seats: {
        type: DataTypes.INTEGER
    },
    available_seats: {
        type: DataTypes.INTEGER
    }
},{
    tableName: 'Buses',
    timestamps: false
})

module.exports = busesTable;