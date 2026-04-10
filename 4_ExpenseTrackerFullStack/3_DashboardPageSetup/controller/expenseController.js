const { use } = require('react');
const expenseTable = require('../model/dashboard');

const addExpense = async (req, res) => {
    const { amount, description, category, userId } = req.body;
    try {
        if(userId === null) {
            res.status(202).json({message: "Session expired!"})
            return;
        }
        await expenseTable.create({amount, description, category, userId});

        res.status(200).json({message: "Expense Added!"})
    } catch(error) {
        res.status(400).json({message: "Something went wrong!"})
    }
}
const getAllExpenses = async (req, res) => {
    const userId = req.params.id;

    try {
        const data = await expenseTable.findAll({where: {userId: userId}});

        if(!data) {
            res.status(202).json({message: "No recorde found!"})
            return;
        }

        res.status(200).json({data: data});
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"});
    }

}

module.exports = {
    addExpense,
    getAllExpenses
}