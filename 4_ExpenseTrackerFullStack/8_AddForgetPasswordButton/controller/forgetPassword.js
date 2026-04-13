const userTable = require('../model/user');


const getEmail = async (req, res) => {
    const {email} = req.body;

    try {
        const user = await userTable.findOne({where: {email: email}});
        if(!user) {
            res.status(400).json({message: "Please enter correct email"});
        }

        res.status(200).json({message: "email sent successfully!"});
    } catch (error) {
        res.status(500).json({message : "something went wrong!"})
    }
}

module.exports = {
    getEmail
}