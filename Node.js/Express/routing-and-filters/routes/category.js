const express = require('express');
const router = express.Router();

const categoryMiddleware = (req, res, next) => {
    console.log("Category middleware executed.");
    next();
}

router.get('/', categoryMiddleware, (req, res) => {
    res.send('Here is the list of all categories.')
})

router.post('/', categoryMiddleware, (req, res) => {
    res.send('A new category has been created.')
})

module.exports = router;