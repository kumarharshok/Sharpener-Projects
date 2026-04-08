const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', userRouter);

module.exports = app;
