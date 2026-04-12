const userTable = require('../model/user');
const expenseTable = require('../model/dashboard');
const Sequelize = require('sequelize');

const getLeadboard = async (req,res) => {
    try {
        const data = await expenseTable.findAll({
        attributes: ['userId',
            [Sequelize.fn('SUM', Sequelize.col('amount')), 'total']
         ],
         include: [
            {
                model: userTable,
            attributes: ['name']
        }
         ],
        group: ['userId', 'user.id'],
        order: [[Sequelize.literal('total'), 'DESC']]

       
    });

    res.status(200).send(data) 
    } catch (error) {
        res.status(400).json({message: "Bad Request!"})
    }
    
}

module.exports = {
    getLeadboard
}