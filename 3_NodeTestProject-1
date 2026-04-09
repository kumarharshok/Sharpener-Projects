const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const path = require('path');


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/reviews', userRoute);


module.exports = app;
