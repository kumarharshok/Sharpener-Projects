const db = require('../utils/db');

const addEnteries = (req, res) => {
    const insertStudentData = "INSERT INTO students (name, email) VALUES (?, ?)";
    const { name, email } = req.body;

    db.query(insertStudentData, [name, email], (error, results) => {
        if(error) { 
            console.log("Error inserting data: ", error);
            return res.status(500).send("Error inserting data");
           
        }
        console.log("value inserted successfully!");
        res.status(200).send(`Data inserted successfully! with ${name}`);
    })
}
const updateEnteries = (req, res) => {
    const updateStudentData = "UPDATE students SET name = ?, email = ? WHERE id = ?";
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query(updateStudentData, [name, email, userId], (error, results) => {
        if(error) { 
        console.log("Error updating data: ", error);
        return res.status(500).send("Error updating data");
           
        }
        console.log("value updated successfully!");
        res.status(200).send(`Data updated successfully! id: ${userId} Name: ${name}, Email: ${email}`);
    })
}

const deleteEnetries = (req, res) => {
    const deleteStudentData = "DELETE FROM students WHERE id = ?";
    const userId = req.params.id;
    db.query(deleteStudentData,[userId],(error, results) => {
        if(error) {
        console.log("Error deleting data: ", error);
        return res.status(500).send("Error deleting data");
            
        }
        res.status(200).send(`Data deleted successfully! with ${userId}`);
    })
}

const showAllData = (req, res) => {
    const showAllData = "SELECT * FROM students";
    db.query(showAllData, (error, results) => {
        if(error) {
        return res.status(500).send("Error fetching data");
        } else if (results.length === 0) {
        return res.status(404).send("No data found");
        }
        res.status(200).send(results);
    })
}

module.exports = {addEnteries, updateEnteries, deleteEnetries, showAllData};