const express = require('express');
const app = express();
const student = require('./routes/student');
const course = require('./routes/course');

app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.use("/student", student);
app.use("/course", course);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
