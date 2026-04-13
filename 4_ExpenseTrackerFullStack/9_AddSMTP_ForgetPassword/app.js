const express = require('express');
const app = express();
const path = require('path');

// All Routes
const userRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const dashboardRoute = require('./routes/expenses');
const purchaseRoute = require('./routes/premium');
const leadboardRoute = require('./routes/leadboard');
const forgetPasswordRoute = require('./routes/forgetPasssword');

// Tables
const user = require('./model/user');
const expenses = require('./model/dashboard');
const forgetPasswordRequest = require('./model/forgetPasswordRequest');


//Connected Table in the form of oneTomany
user.hasMany(expenses);
expenses.belongsTo(user);

user.hasMany(forgetPasswordRequest);
forgetPasswordRequest.belongsTo(user);

// For Running All Pages From Public Folder 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

//Handler
app.use('/sign-up', userRoute);
app.use('/log-in', loginRoute);
app.use('/dashboard', dashboardRoute);
app.use('/dashboard/purchase', purchaseRoute);
app.use('/dashboard', leadboardRoute);
app.use('/forgetPassword', forgetPasswordRoute)

module.exports = app;
