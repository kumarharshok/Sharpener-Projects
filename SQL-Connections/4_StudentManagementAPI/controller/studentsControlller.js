const db = require('../utils/db');

const insertNewStudent = (req, res) => {
const insertNewStudent = "INSERT INTO students (name, email, age) VALUES (?,  ?, ?)";
const {name, email, age} = req.body;
db.query(insertNewStudent,[name, email, age], (error, results) => {
    if(error) {
        console.log("Error inserting data: ", error);
        return res.status(500).send("Error inserting data");
    } else {
        console.log("value inserted successfully!");
        res.status(200).send("Data inserted successfully!");
    }
})
}

const showAllStudents = (req, res) => {
const showAllItems = "SELECT * FROM students";
db.query(showAllItems, (error, results) => {
    if(error) {
        console.log("Error showing data: ", error);
        return res.status(500).send("Error showing data");
    } else {
        console.log("Data fetched successfully!");
        res.status(200).send(results);
    }
})
}

const getStudentById = (req, res) => {
const userId = req.params.id;
const showingById = "SELECT * FROM students WHERE id = ?";
db.query(showingById, [userId], (error, results) => {
    if(error) {
        console.log("Error showing data: ", error);
        return res.status(500).send("Error showing data");
    } else {
        console.log("Data fetched successfully!");
        res.status(200).send(results);
    }
})
}

const updateStudentById = (req, res) => {
const userId = req.params.id;
const {name, email, age} = req.body;
const updateData = "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?;"
db.query(updateData, [name, email, age, userId], (error, results) => {
    if(error) {
        console.log("Error updating data: ", error);
        return res.status(500).send("Error updating data");
    } else {
        console.log("value updated successfully!");
        res.status(200).send("Data updated successfully!");
    }
})
}

const deleteStudentById = (req, res) => {
const userId = req.params.id;
const deleteRow = "delete from students WHERE id = ?;"
db.query(deleteRow, [userId], (error, results) => {
    if(error) {
        console.log("Error deleteing data: ", error);
        return res.status(500).send("Error deleting data");
    } else {
        console.log("Data deleted successfully!");
        res.status(200).send("Data deleted successfully!");
    }
})
}

module.exports = {
    showAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    insertNewStudent
}