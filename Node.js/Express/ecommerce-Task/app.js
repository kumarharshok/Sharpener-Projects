const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const cartRouter = require('./routes/cart')

app.use((req, res, next) => {
    console.log('Welcome to the E-commerce API');
    next();
})

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);


app.listen(4000, ()=> {
    console.log("Server is running on port 4000");
})
