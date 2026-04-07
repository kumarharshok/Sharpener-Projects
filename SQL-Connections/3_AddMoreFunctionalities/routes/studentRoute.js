const express = require('express');
const router = express.Router();
const studentContorller = require('../controller/studentsController');

router.use((req, res, next) => {
    console.log("studentRoute.js Middleware");
    next();
})
router.get('/',studentContorller.showAllData);
router.post('/',studentContorller.addEnteries);
router.put('/:id',studentContorller.updateEnteries);
router.delete('/:id', studentContorller.deleteEnetries);


module.exports = router;