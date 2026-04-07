const mySql = require('mysql2');
const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harsh123@',
    database: 'startsql'
})

connection.connect((error) => {
    if(error) {
        console.log("Error connecting to the database: ", error);
    } else {
        console.log("Connected to the database successfully!");
    }
})

module.exports = connection;