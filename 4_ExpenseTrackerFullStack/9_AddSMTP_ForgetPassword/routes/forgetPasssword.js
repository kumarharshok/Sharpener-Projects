const express = require('express');
const router = express.Router();
const forgetPasswordController = require('../controller/forgetPassword');

router.post('/', forgetPasswordController.getEmail);
router.get('/reset/:id', forgetPasswordController.showForm);
router.post('/update/:id', forgetPasswordController.updatePassword);

module.exports = router;