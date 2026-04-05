const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    console.log('cart middleware.');
    next();
})

router.get('/:id', (req, res)=> {
    res.send(`Fetch the cart items for a specfic user with id ${req.params.id}`);
});

router.post('/:id', (req, res) => {
    res.send(`Add an item to the cart of a user with id ${req.params.id}`);
});

module.exports = router;