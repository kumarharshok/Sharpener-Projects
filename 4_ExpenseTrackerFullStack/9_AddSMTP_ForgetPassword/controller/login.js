const userTable = require('../model/user');

const validateUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const existsUser = await userTable.findOne({ where: { email:email } });

    
        if(!existsUser) {
            return res.status(400).json({message: "Don't have an account"});
        }  
        
        if (existsUser.password === password) {
            console.log("Login successfully!");
            return res.status(200).json({message: "Login successfully!", user: existsUser});
        } else {
            console.log("Please enter correct password")
            return res.status(401).json({message: "Please enter correct password"})
        }
    } catch(error) {
        res.status(500).json({message: "Server error: ", error: error.message});
    }
}

module.exports = {
    validateUser
}