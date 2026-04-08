const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize_connection', 'root','Harsh123@', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=> {
    console.log("Database connected successfully!");
})
.catch((error) => {
    console.log("Error connecting to the database: ", error);
})
module.exports = sequelize;