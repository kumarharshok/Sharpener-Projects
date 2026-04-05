const express = require('express');
const router = express.Router();
const {showForm} = require('../controller/student')

router.use((req, res, next) => {
    console.log('Student middleware.');
    next();
})
router.post('/', (req, res) => {
    console.log(req.body);
    res.send("Data received");
});
router.get('/', showForm);

module.exports = {router}
