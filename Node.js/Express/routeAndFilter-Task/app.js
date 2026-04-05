const express = require('express');
const app = express();

const bookroute = require('./routes/books');


// IMPORTANT (POST data read karne ke liye)
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
})

app.use('/books', bookroute);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
