const express = require('express');
const router = express.Router();
const incomeController = require('../controller/income');

router.post('/', incomeController.addIncome);

module.exports = router;
