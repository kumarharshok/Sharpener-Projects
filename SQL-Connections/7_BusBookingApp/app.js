const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const busRoute = require('./routes/busRoute');


app.use(express.json());

app.use('/users', userRoute);
app.use('/buses', busRoute);

module.exports = app;
