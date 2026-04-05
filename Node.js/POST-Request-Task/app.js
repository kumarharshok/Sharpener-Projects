const express = require('express');
const app = express();
const {router} = require('./routes/student')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
})


app.use('/student', router);


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
