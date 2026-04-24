const express = require('express');
const router = express.Router();
const userChatsController = require('../controller/userChats');


router.post('/chats', userChatsController.newMessage);

module.exports = router;