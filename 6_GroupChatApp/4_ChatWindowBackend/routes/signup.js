const express = require('express');
const router = express.Router();
const signupController = require('../controller/signup');

router.get('/', signupController.showForm);
router.post('/signup', signupController.addUser);


module.exports = router;