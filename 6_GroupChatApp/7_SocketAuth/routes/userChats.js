const express = require('express');
const router = express.Router();
const userChatsController = require('../controller/userChats');
const authMiddleware = require('../middleware/auth');

router.post('/chats',authMiddleware, userChatsController.newMessage);
router.get('/chats',authMiddleware, userChatsController.getMessage);

module.exports = router;