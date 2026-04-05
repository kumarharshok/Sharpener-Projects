const express = require('express');
const app = express();

const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/category');


app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
})


app.use('/products', productsRouter);
app.use('/categories', categoryRouter);




app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
