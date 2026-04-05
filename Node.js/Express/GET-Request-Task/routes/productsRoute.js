const express = require('express');
const router = express.Router();
const {productInputs} = require('../controller/productServices');

router.get('/', productInputs);

module.exports = router;