require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db');
require('./model/user');
require('./model/dashboard');
require('./model/forgetPasswordRequest');


console.log("API KEY:", process.env.BREVO_API_KEY);



sequelize.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("Database sync and Server is running successfully!")
    })
})
.catch((error) => {
    console.log("Error during sync: ", error);
})