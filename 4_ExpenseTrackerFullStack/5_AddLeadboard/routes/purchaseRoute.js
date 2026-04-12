const express = require('express');
const router = express.Router();
const premiumController = require('../controller/premiumController');

router.post('/:id', premiumController.buyPremium);

module.exports = router;