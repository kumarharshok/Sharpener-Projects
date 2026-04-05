const express = require('express');
const router = express.Router();
const {
    getCartItemsWithId,
    addCartItemWithId
} = require('../controllers/cartController');

router.use((req,res,next) => {
    console.log('cart middleware.');
    next();
})

router.get('/:id', getCartItemsWithId);
router.post('/:id', addCartItemWithId);

module.exports = router;