const express = require('express');
const app = express();
const db = require('./utils/db');
const studentRoute = require('./routes/studentRoute');
const busRoute = require('./routes/busRoute');

app.use(express.json());

app.use((req, res, next) => {
    console.log("app.js Middleware");
    next();
})

app.use('/students', studentRoute);
app.use('/buses', busRoute);


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
