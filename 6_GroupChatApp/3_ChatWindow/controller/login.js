const userTable = require('../model/users');
const bcrypt = require('bcrypt');

const isValidUser = async (req, res) => {
    const { identifire, password } = req.body;
    console.log(req.body);

    try {
        if (identifire === "") {
            return res.status(400).json({ message: "Please enter Your correct Email and Phone number..!" })
        }

        let user = null;
        if (identifire.includes("@")) {
            user = await userTable.findOne({ where: { email: identifire } });
        } else {
            user = await userTable.findOne({ where: { number: identifire } });
        }

        if (user) {
            const isMatched = await bcrypt.compare(password, user.password);
            console.log(isMatched);
            console.log("Input:", password);
            console.log("DB:", user.password);
            if (isMatched) {
                return res.status(200).json({ message: "Login successfully..!" })
            } else {
                return res.status(401).json({ message: "Password is incorrect..!" });
            }
        }

        res.status(404).json({ message: "User not found..!" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong..!" })
    }

}

module.exports = {
    isValidUser
}