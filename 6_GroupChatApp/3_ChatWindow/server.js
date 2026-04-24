const app = require('./app');
const sequelize = require('./config/db');
require('./model/users');


sequelize.sync()
.then(()=> {
    app.listen(4000, () => {
        console.log("Database Sync and Server is running properly...!");
    })
})
.catch((error) => {
    console.log("Something went wrong during sync & run server...!")
})