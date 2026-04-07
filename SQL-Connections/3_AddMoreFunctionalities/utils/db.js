const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harsh123@',
    database: 'students'
});

connection.connect((error) => {
    if(error) {
        console.log("Error connecting to the database: ", error);
        return;
    }
    console.log("Connected to the database successfully!");
})

const createStudentTable = "create table if not exists students (id int primary key auto_increment ,name varchar(25), email varchar(100));"

connection.query(createStudentTable, (error, results) => {
    if(error) {
        console.log("Error creating students table: ", error);
    } else {
        console.log("Students table created successfully!");
    }
})

const createBusesTable = "create table if not exists buses (id int primary key auto_increment, bus_name varchar(50), total_seats int, available_seats int)";

connection.query(createBusesTable,(error, results) => {
    if(error) {
        console.log("Error creating buses table: ", error);
    } else {
        console.log("Buses table created successfully!");
    }
})

module.exports = connection;