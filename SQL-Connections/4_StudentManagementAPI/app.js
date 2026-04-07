const express = require('express');
const app = express();
const db = require('./utils/db');
const studentsRoute = require('./routes/studentsRoute')

app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
})

app.use('/students', studentsRoute);


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
