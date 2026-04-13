const userTable = require('../model/user');
const forgetPasswordRequest = require('../model/forgetPasswordRequest');
const { v4: uuidv4 } = require('uuid');
const sendMail = require('../utils/sendMail');
const bcrypt = require('bcrypt');



const getEmail = async (req, res) => {
    const {email} = req.body;

    try {
        const user = await userTable.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }

        const request = await forgetPasswordRequest.create({
            id: uuidv4(),  
            userId: user.id,
            isActive: true
        });

        const resetLink = `http://localhost:4000/forgetPassword/reset/${request.id}`;

        console.log("Sending mail to:", email);

        await sendMail(email, resetLink);

        res.status(200).json({ message: "Reset link sent!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}

const showForm = async (req, res) => {
const id = req.params.id;

 try {
        const request = await forgetPasswordRequest.findOne({ where: { id } });

        if (!request || !request.isActive) {
            return res.send("Link invalid or expired!");
        }

        res.send(`
            <form action="/forgetPassword/update/${id}" method="POST">
                <input type="password" name="password" placeholder="Enter new password" required />
                <button type="submit">Reset Password</button>
            </form>
        `);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
}

const updatePassword = async (req, res) => {
    const id = req.params.id;
    const {password} = req.body;

    try {
        const request = await forgetPasswordRequest.findOne({ where: { id } });

        if (!request || !request.isActive) {
            return res.status(400).send("Invalid request");
        }

        

        await userTable.update(
            { password: password },
            { where: { id: request.userId } }
        );

        request.isActive = false;
        await request.save();

        res.send("Password updated successfully!");

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
    }
}

module.exports = {
    getEmail,
    showForm,
    updatePassword
}