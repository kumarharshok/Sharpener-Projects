const express = require('express');
const router = express.Router();
const {getProducts, getProductById, createProduct} = require('../controllers/productsController');

router.use((req, res, next) => {
    console.log('Products middleware.');
    next();
})
router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);

module.exports = router;