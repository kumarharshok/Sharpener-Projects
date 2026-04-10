const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');

router.post('/', expenseController.addExpense);
router.get('/:id', expenseController.getAllExpenses);

module.exports = router;