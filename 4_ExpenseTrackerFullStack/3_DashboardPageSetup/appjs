const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const path = require('path');
const user = require('./model/user');
const expenses = require('./model/dashboard');


//Connected Table in the form of oneTomany
user.hasMany(expenses);
expenses.belongsTo(user);


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/sign-up', userRoute);
app.use('/log-in', loginRoute);
app.use('/dashboard', dashboardRoute);

module.exports = app;
