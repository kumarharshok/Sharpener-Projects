const getCartItemsWithId = (req, res) => {
    res.send(`Fetch cart items with id ${req.params.id}`);
}

const addCartItemWithId = (req, res) => {
    res.send(`Add an item to the cart with id ${req.params.id}`);
}

module.exports = {
    getCartItemsWithId,
    addCartItemWithId
}