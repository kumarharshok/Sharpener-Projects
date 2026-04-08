const userTable = require('../model/userTable');

const addUsers = async (req, res) => {
const { username, email, phone } = req.body;
try {
   await userTable.create({username, email, phone});

    console.log("Value inserted successfully!");
    res.status(200).send("Data inserted successfully!");
} catch (error) {
    console.log("Error inserting data: ", error);

    res.status(500).send("Error inserting data");
}

}

const showAllUsers = async (req,res) => {

    const data =  await userTable.findAll();
    try {
        console.log("Data fetched successfully!");
        res.status(200).send(data);
    } catch (error) {
        console.log("Error fetching data: ", error);
        res.status(500).send("Error fetching data");
    }

}

const removeUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        await userTable.destroy({where: {id: userId}});

        console.log("value deleted successfully!");
        res.status(200).send(`Data deleted successfully! with ${userId}`);
    } catch (error) {
        console.log("Error deleting data: ", error);
        res.status(500).send("Error deleting data");
    }
}

const updateUserBtId = async (req, res) => {
    const userId = req.params.id;
    const { username, email, phone } = req.body;
    try {
        await userTable.update({username, email, phone}, {where: {id: userId}});

        console.log("Value updated successfully!");
        res.status(200).send(`Data updated successfully! id: ${userId} Name: ${username}, Email: ${email}`);
    } catch (error) {
        console.log("Error updating data: ", error);
        res.status(500).send("Error updating data");
    }
}

module.exports = {
    addUsers,
    showAllUsers,
    removeUserById,
    updateUserBtId
}