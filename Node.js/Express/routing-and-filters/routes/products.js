const express = require('express');
const router = express.Router();


const productsMiddleware = (req, res, next) => {
    console.log("Products middleware executed.");
    next();
}

router.get('/', productsMiddleware, (req, res) => {
    res.send('Here is the list of all products.')
})

router.post('/', productsMiddleware, (req, res) => {
    res.send('A new product has been added.')
})

module.exports = router;