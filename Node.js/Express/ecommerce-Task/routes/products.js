const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Products middleware.');
    next();
})
router.get('/', (req, res) => {
    res.send('Fetch all products.');
})
router.post('/', (req, res) => {
    res.send('Add new product.')
})
router.get('/:id', (req, res) => {
    res.send('Fetch a product with id ' + req.params.id);
})

module.exports = router;