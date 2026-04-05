const express = require('express');
const app = express();
const productsRouter = require('./routes/productsRoute');

app.use('/products', productsRouter);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
