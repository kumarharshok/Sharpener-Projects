const express = require('express');
const app = express();
const studentRouter = require('./routes/studentRoute');

app.use(express.json());

app.use('/student', studentRouter);


module.exports = app;
