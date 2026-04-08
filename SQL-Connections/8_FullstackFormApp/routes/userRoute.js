const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/', userController.addUsers);
router.get('/', userController.showAllUsers);
router.delete('/:id', userController.removeUserById);
router.put('/:id',userController.updateUserBtId);

module.exports = router;