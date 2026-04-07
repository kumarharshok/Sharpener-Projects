const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harsh123@',
    database: 'Students'
});

connection.connect((error) => {
    if(error) {
        console.log("Error connecting to the database: ", error);
        return;
    }
    console.log("Connected to the database successfully!");
})

const createStudentTable = "create table if not exists students (name varchar(25), email varchar(100));"

connection.query(createStudentTable, (error, results) => {
    if(error) {
        console.log("Error creating students table: ", error);
    } else {
        console.log("Students table created successfully!");
    }
})

module.exports = connection;