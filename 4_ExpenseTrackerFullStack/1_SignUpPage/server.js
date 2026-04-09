const app = require('./app');
const sequelize = require('./config/db');
require('./model/user');

sequelize.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("Database sync and Server is running successfully!")
    })
})
.catch((error) => {
    console.log("Error during sync: ", error);
})