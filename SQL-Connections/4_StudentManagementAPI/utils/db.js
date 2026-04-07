const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harsh123@",
    database: "Example_one"
})

connection.connect((error) => {
    if(error) {
        console.log("Error connecting to the database: ", error);
    } else {
        console.log("Connected to the database successfully!");
    }
})

const createStudentTable = "CREATE TABLE IF NOT EXISTS students (id int primary key auto_increment, name varchar(25), email varchar(25), age int)";

connection.query(createStudentTable, (error, results) => {
    if(error) {
        console.log("Error creating student table: ", error);
    }
    console.log("Student table created successfully!");
})


module.exports = connection;