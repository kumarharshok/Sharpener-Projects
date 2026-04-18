const userTable = require('../model/user');
const Sequelize = require('sequelize');

const getLeadboard = async (req,res) => {
    try {
       const data = await userTable.findAll({
        attributes: ['name', 'totalExpenses'],
        order: [['totalExpenses', 'DESC']]
       })
    res.status(200).send(data) 
    } catch (error) {
        res.status(400).json({message: "Bad Request!"})
    }
    
}

module.exports = {
    getLeadboard
}