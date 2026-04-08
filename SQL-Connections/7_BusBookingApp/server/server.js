const app = require('../app');
const sequelize = require('../config/db');

sequelize.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("server is running!");
    })
    console.log("Databse synced successfully! and Table also created!");
})
.catch((error) => {
    console.log("Error syncing database: ", error);
})