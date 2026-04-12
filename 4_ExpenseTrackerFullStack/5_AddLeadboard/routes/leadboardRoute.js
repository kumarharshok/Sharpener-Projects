const express = require('express');
const router = express.Router();
const leadboardController = require('../controller/leadboardController');

router.get('/', leadboardController.getLeadboard);

module.exports = router;