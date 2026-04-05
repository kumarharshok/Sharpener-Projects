const express = require('express');
const router = express.Router();

const booksMiddleware = (req, res, next) => {
    res.send('Books middleware executed.')
}

router.get('/', booksMiddleware, (req, res) => {
    console.log("GET /books route accessed.");
    res.send('Here is the list of all books!')
})

router.post('/', booksMiddleware, (req, res) => {
    console.log("Books data: ", req.body)
    res.send('Book has been added!')
})

module.exports = router;