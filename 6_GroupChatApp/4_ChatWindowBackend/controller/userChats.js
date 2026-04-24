const Chats = require('../model/chats');

const newMessage = async (req,res) => {
    const { message, userId } = req.body;

    try {
      await Chats.create({message, userId});

    res.status(200).json({message: "Message successfully stored"});  
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong..!"})
    }    
}

module.exports = {
    newMessage
}