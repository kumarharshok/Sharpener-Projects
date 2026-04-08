const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');
const { route } = require('../app');

router.get('/', studentController.showAllData);
router.post('/', studentController.insertData);
router.put('/:id', studentController.updateData);
router.delete('/:id', studentController.deleteData);



module.exports = router;