const userTable = require('../model/user');
const path = require('path');

const addUser = async (req, res) => {
    const { name, email, password, isPrimeuser } = req.body;
    try {

        const existingUser = await userTable.findOne({where: {email}});

        if(existingUser) {
            return res.status(400).json({message: "User already exists!"});
        }

        await userTable.create({name, email, password, isPrimeuser});

        res.status(201).json({message: "Signup successfully! Remember your email and password."});
    } catch (error) {
        console.log("Error in data added: ", error);
        res.status(500).json({message: "Error in data inserted"});
    }
}

const getForm = async (req, res) => {
   await res.sendFile(path.join(__dirname, '..', 'public', 'sign-up.html'));
}

module.exports = {
    addUser,
    getForm
}