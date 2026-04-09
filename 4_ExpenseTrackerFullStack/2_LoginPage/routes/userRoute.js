const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const path = require('path');

router.post('/', userController.addUser);
router.get('/', userController.getForm);
module.exports = router;