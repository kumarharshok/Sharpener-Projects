const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_connection', 'root', 'Harsh123@', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate()
.then(()=> {
    console.log("Database is authenticated successfully!");
})
.catch((error)=> {
    console.log("Database authentication failed: ", error);
})

module.exports = sequelize;