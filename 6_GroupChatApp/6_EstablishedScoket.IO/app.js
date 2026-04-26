const express = require('express');
const app = express();

//Tables
const User = require('./model/users');
const Chats = require('./model/chats');

//Routes
const homePageRoute = require('./routes/signup');
const loginPageRoute = require('./routes/login');
const userChatsRoute = require('./routes/userChats');

app.use(express.json());

User.hasMany(Chats);
Chats.belongsTo(User);

app.use('/', homePageRoute);
app.use('/', loginPageRoute);
app.use('/', userChatsRoute);



app.use(express.static('public'));

module.exports = app;
