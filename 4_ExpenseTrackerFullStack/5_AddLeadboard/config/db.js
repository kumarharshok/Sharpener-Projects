const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'Harsh123@', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Database authenticated successfully!");
})
.catch((error) => {
    console.log("Database authentication failed..!")
})

module.exports = sequelize;