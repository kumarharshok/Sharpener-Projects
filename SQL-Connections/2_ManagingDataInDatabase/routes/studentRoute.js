const express = require('express');
const router = express.Router();
const studentContorller = require('../controller/studentsController');

router.use((req, res, next) => {
    console.log("studentRoute.js Middleware");
    next();
})
router.post('/students',studentContorller.addEnteries);
router.post('/students/update',studentContorller.updateEnteries);
router.post('/students/delete', studentContorller.deleteEnetries);

module.exports = router;