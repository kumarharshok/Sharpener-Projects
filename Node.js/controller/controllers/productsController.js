
const getAllProducts = (req, res) => {
    res.send('Fetch all products.');
}

const getProductById = (req, res) => {
    res.send('Fetch a product with id ' + req.params.id);       
}

const createProduct = (req, res) => {
    res.send('Add new product.');
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}