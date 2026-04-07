const db = require('../utils/db');

const addEnteries = (req, res) => {
    const insertStudentData = "INSERT INTO students (name, email) VALUES (?, ?)";
    const { name, email } = req.body;

    db.query(insertStudentData, [name, email], (error, results) => {
        if(error) {
            console.log("Error inserting data: ", error);
            db.connection.end();
            return;
        }
        console.log("value inserted successfully!");
        res.status(200).send(`Data inserted successfully! with ${name}`);
    })
}
const updateEnteries = (req, res) => {
    const updateStudentData = "UPDATE students SET email = ? WHERE name = ?";
    const { name, email } = req.body;
    db.query(updateStudentData, [email, name], (error, results) => {
        if(error) {
            console.log("Error updating data: ", error);
            db.connection.end();
            return;
        }
        console.log("value updated successfully!");
        res.status(200).send(`Data updated successfully! with ${name} and ${email}`);
    })
}

const deleteEnetries = (req, res) => {
    const deleteStudentData = "DELETE FROM students WHERE name = ?";
    const {name} = req.body;
    db.query(deleteStudentData,[name],(error, results) => {
        if(error) {
            console.log("Error deleting data: ", error);
            db.connection.end();
            return;
        }
        res.status(200).send(`Data deleted successfully! with ${name}`);
    })
}

module.exports = {addEnteries, updateEnteries, deleteEnetries};