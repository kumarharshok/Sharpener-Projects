const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_connection', 'root', 'Harsh123@', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(() => {
    console.log("Database authenticated successfully!");
})
.catch((error) => {
    console.log("Error authenticating to the database: ", error);
})

module.exports = sequelize;