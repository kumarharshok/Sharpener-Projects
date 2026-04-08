const userTable = require('../model/expense');

const addUser = async (req, res) => {
    const { amount, description, category } = req.body;
    try {
        await userTable.create({amount, description, category});

        console.log("Data inserted successfully!");
        res.status(200).send("Data inserted successfully!");
    } catch (error) {
        console.log("Error inserting data: ", error);
        res.status(500).send("Error inserting data");
    }
}
const showAllUsers = async (req, res) => {
    const data = await userTable.findAll();
    try {
        console.log("Data fetched successfully!")
        res.status(200).send(data);
    } catch (error) {
        console.log("Error fetching data: ", error);
        res.status(500).send("Error fetching data");
    }
}

const removeByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        await userTable.destroy({where: {id: userId}});
        
        console.log("Data deleted successfully!");
        res.status(200).send(`Data deleted successfully! with ${userId}`);
    } catch(error) {
        console.log("Error deleting data: ", error);
        res.status(500).send("Error deleting data");
    }
}

const updateById = async (req, res) => {
    const userId = req.params.id;
    const {amount, description, category} = req.body;
    try {
        await userTable.update({amount, description, category}, {where: {id: userId}});

        console.log("Data updated successfully!");
        res.status(200).send(`Data updated successfully! id: ${userId} Name: ${amount}, Email: ${description}`);
    } catch (error) {
        console.log("Error updating data: ", error);
        res.status(500).send("Error updating data");
    }
}

module.exports = {
    addUser,
    showAllUsers,
    removeByUserId,
    updateById
}