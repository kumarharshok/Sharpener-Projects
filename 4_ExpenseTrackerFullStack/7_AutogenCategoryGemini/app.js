const express = require('express');
const app = express();
const path = require('path');

// All Routes
const userRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const dashboardRoute = require('./routes/expenses');
const purchaseRoute = require('./routes/premium');
const leadboardRoute = require('./routes/leadboard');

// Tables
const user = require('./model/user');
const expenses = require('./model/dashboard');


//Connected Table in the form of oneTomany
user.hasMany(expenses);
expenses.belongsTo(user);

// For Running All Pages From Public Folder 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Handler
app.use('/sign-up', userRoute);
app.use('/log-in', loginRoute);
app.use('/dashboard', dashboardRoute);
app.use('/dashboard/purchase', purchaseRoute);
app.use('/dashboard', leadboardRoute);

module.exports = app;
