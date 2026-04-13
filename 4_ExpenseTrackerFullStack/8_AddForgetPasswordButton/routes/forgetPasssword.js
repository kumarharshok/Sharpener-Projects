const express = require('express');
const router = express.Router();
const forgetPasswordController = require('../controller/forgetPassword');

router.post('/', forgetPasswordController.getEmail);

module.exports = router;