const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/expense', userRoute);


module.exports = app;
