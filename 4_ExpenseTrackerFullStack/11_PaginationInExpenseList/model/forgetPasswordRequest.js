const sequelize = require('../config/db');
const { DataTypes, UUIDV4 } = require('sequelize');

const forgetPasswordRequest = sequelize.define('forgetPasswordRequest', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'forgetPasswordRequest',
    timestamps: true
})

module.exports = forgetPasswordRequest;