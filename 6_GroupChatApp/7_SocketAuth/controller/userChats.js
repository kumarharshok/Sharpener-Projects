const Chats = require('../model/chats');

const newMessage = async (req,res) => {
    const { message } = req.body;
    const userId = req.user.userId;

    try {
      await Chats.create({message, userId});

    res.status(200).json({message: "Message successfully stored"});  
    } catch (error) {
        res.status(500).json({message: "something went wrong..!"})
    }    
}

const getMessage = async (req,res) => {
    try {
    const allMessages = await Chats.findAll();
    res.status(200).json({data: allMessages});  
    } catch (error) {
        res.status(500).json({message: "somehting went wrong..!"})
    } 
}



module.exports = {
    newMessage,
    getMessage
}