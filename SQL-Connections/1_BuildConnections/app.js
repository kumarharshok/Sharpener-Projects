const express = require('express');
const app = express();
const db = require('./db');


app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
})

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users ', (error, results) => {
        if(error) {
            res.send('Error occurred while fetching data');
        } else {
            res.json(results);
        }
    })
})


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
