const path = require('path');
const productInputs = (req, res) => {
    res.sendFile(path.join(__dirname, './views/product.html'));
}
module.exports = {productInputs};