const express = require('express');
const router = express.Router();
const leadboardController = require('../controller/leadboard');

router.get('/', leadboardController.getLeadboard);

module.exports = router;