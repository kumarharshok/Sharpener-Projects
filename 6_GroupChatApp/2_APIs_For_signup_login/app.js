const express = require('express');
const app = express();


//Routes
const homePageRouter = require('./routes/signup');
const loginPageRouter = require('./routes/login');

app.use(express.json());


app.use('/', homePageRouter);
app.use('/', loginPageRouter);




app.use(express.static('public'));

module.exports = app;
