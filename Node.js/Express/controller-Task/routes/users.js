const express = require('express');
const router = express.Router();
const { getAllUser, getUserById, createUser } = require('../controllers/userController');

const checkUser = ((req,res,next) => {
    console.log('Check user middleware.');
    next();
})

router.get('/',checkUser, getAllUser);
router.post('/', checkUser, createUser);
router.get('/:id',checkUser, getUserById);


module.exports = router;