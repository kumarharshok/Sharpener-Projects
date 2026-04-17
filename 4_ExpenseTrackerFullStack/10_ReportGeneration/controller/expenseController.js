const userTable = require('../model/user');
const expenseTable = require('../model/dashboard');
const sequelize = require('../config/db');
const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});


const addExpense = async (req, res) => {
    const { amount, description, userId } = req.body;

    try {
        if(userId === null) {
            res.status(202).json({message: "Session expired!"})
            return;
        }

        const category = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `i have to store categoryfor this expense, Give me only one category for this description: ${description}`
        })


        await expenseTable.create({amount, description, category: category.text, userId});

        await userTable.increment({totalExpenses: amount}, {where: {id: userId}});

        

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

const deleteExpense = async (req, res) => {

    const expsenseId = req.params.id;

    const t = await sequelize.transaction();

    try {

        const expense = await expenseTable.findOne({where: {id: expsenseId}, transaction: t});

        await expenseTable.destroy({where: {id : expsenseId},  transaction: t});

        await userTable.decrement({totalExpenses: expense.amount}, {where: {id: expense.userId}, transaction: t});

        await t.commit();


        res.status(200).json({message: "item removed successfully refresh the page!"})
    } catch(error) {
        await t.rollback();
        res.status(400).json({message: "something went wrong!"});
    }

}

module.exports = {
    addExpense,
    getAllExpenses,
    deleteExpense
}