const app = require('../app');
const sequelize = require('../config/db');

sequelize.sync()
.then(()=> {
    console.log("Databse synced successfully! and Table also created!");
})
.catch((error) => {
    console.log("Error syncing database: ", error);
})

app.listen(4000, () => {
    console.log("Server is Running on port 4000.")
})