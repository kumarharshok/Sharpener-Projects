const express = require('express');
const router = express.Router();
const loginPageController = require('../controller/login');

router.post('/login', loginPageController.isValidUser);

module.exports = router;