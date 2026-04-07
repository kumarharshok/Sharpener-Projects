const express = require('express');
const router = express.Router();
const busController = require('../controller/busesController');

router.post('/', busController.addBus);
router.get('/available/:value', busController.showData);

module.exports = router;