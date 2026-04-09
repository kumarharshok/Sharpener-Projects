const app = require('./app');
const sequelize = require('./config/db');

require('./model/user');

sequelize.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("Serevre connected with Database successfully!");
    })
})
.catch((error) => {
    console.log("Error connecting to the database and server: ", error);
})