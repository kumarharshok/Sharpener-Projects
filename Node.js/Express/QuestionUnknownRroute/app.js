const express = require('express');
const app = express();

const routesMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.get('/products',routesMiddleware , (req, res) => {
    res.send('Here is the list of all products.')
})

app.get('/categories', routesMiddleware, (req, res) => {
    res.send('Here is the list of all categories.')
})
app.post('/products', routesMiddleware, (req, res) => {
    res.send('A new product has been added.')
})
app.post('/categories', routesMiddleware, (req, res) => {
    res.send('A new category has been created.')
})

app.use((req, res) => {
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})


app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
})  
