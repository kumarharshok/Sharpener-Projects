
const users = require('../models/usersTable');

const addUser = async(req, res) => {
    const { name, email } = req.body;
    try {
        await users.create({name, email});
        
        console.log("Value inserted successfully!");
        res.status(200).send(`Data inserted successfully! with name: ${name}`);
    } catch(error) {
        console.log("Error inserting data: ", error);
        res.status(500).send("Error inserting data");
    }
}

const showAllUsers = async(req, res) => {
    try {
        const data =await users.findAll();
        
        console.log("Data fetched successfully!");
        res.status(200).send(data);
    } catch(error) {
        console.log("Data fetching error: ", error);
        res.status(500).send("Error fetching data");
    }
}

module.exports = {
    addUser,
    showAllUsers
}