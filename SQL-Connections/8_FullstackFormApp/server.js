const sequelize = require('./config/db');
const app = require('./app');

require('./model/userTable');

sequelize.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("Server and Database connected successfully!");
    })
})
.catch((error) => {
    console.log("Error connecting to the database and server: ", error);
})