const express = require('express');
const router = express.Router();

const checkUser = ((req,res,next) => {
    console.log('Check user middleware.');
    next();
})

router.get('/',checkUser, (req, res) => {
    res.send('Fetch all users.');
})
router.post('/', checkUser, (req, res) => {
    res.send('Add new user.')
})
router.get('/:id',checkUser,(req, res) => {
    res.send(`Fetch user with id ${req.params.id}`);
})

module.exports = router;