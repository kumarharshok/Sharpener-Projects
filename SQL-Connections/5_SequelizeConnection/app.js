const sequelize = require('./utils/db');
const studentTable = require('./models/studentTable');

sequelize.sync()
.then(() => {
    console.log('Table created successfully!')
})
.catch((error)=> {
    console.log("Error creating table: ", error);
})
