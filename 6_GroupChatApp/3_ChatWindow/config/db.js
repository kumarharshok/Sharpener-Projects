const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupChatApp', 'root', 'Harsh123@', {
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=> {
    console.log("Database authenticate successfully..!")
})
.catch((error) => {
    console.log("Something went wrong during authentication..! ", error);
})

module.exports = sequelize;