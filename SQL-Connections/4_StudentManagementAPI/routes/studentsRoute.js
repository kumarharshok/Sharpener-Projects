const express = require('express');
const router = express.Router();
const studentsController = require('../controller/studentsControlller');

router.post('/', studentsController.insertNewStudent);
router.get('/', studentsController.showAllStudents);
router.get('/:id',studentsController.getStudentById);
router.put('/:id', studentsController.updateStudentById)
router.delete('/:id', studentsController.deleteStudentById);



module.exports = router;