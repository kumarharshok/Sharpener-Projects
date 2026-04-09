const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.addReview);
router.get('/:company_name', userController.getReviewsByCompanyName);

module.exports = router;