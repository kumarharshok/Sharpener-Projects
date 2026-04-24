const express = require('express');
const router = express.Router();
const userChatsController = require('../controller/userChats');


router.post('/chats', userChatsController.newMessage);
router.get('/chats', userChatsController.getMessage);

module.exports = router;