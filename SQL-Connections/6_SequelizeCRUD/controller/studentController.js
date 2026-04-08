const Student = require('../model/studentTable');

const showAllData = async (req, res) => {
    try {
        const data = await Student.findAll();

        if(data.length === 0) {
            return res.status(400).send("No data found");
        }

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Error fetching data")
    }
};

const insertData = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        await Student.create({name, email, age});

        console.log("Value inserted successfully!");
        res.status(200).send(`Data inserted successfully! with name: ${name}`);
    } catch (error) {
        console.log("Error inserting data: ", error);
        res.status(500).send("Error inserting data");
    }
}

const updateData = async (req, res) => {
    const userId = req.params.id;
    const { name, email, age } = req.body;
    try {
        await Student.update({name, email, age}, {where: {id: userId}});

        console.log("Value updated successfully!");
        res.status(200).send(`Data updated successfully! id: ${userId} Name: ${name}, Email: ${email}`);
    } catch (error) {
        console.log("Error updating data: ", error);
        res.status(500).send("Error updating data");
    }
}

const deleteData = async (req, res) => {
    const userId = req.params.id;
    try {
        await Student.destroy({where: {id: userId}});

        console.log("Value deleted successfully!");
        res.status(200).send(`Data deleted successfully! with ${userId}`);
    } catch (error) {
        console.log("Error deleting data: ", error);
        res.status(500).send("Error deleting data");
    }
}

module.exports = {
    showAllData,
    insertData,
    deleteData,
    updateData
}