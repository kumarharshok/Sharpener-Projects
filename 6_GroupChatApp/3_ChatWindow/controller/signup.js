const path = require('path');
const userTable = require('../model/users');
const bcrypt = require('bcrypt');

const showForm = async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
}

const addUser = async (req, res) => {
    const { username, email, number, password } = req.body;

    try {
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        await userTable.create({ username, email, number, password: hashPassword });

        res.status(200).json({ message: "Signup successfully..!" });
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}
module.exports = {
    showForm,
    addUser
}