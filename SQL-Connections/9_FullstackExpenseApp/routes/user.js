const express = require('express');
const router = express.Router();
const controller = require('../controller/user');


router.post('/', controller.addUser);
router.get('/', controller.showAllUsers);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.removeByUserId);

module.exports = router;