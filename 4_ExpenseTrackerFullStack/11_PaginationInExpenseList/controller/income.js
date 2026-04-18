const expenseTable = require('../model/dashboard');
const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});
const addIncome = async (req, res) => {
const { amount, description, isIncome, userId } = req.body;

try {

    const category = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `i have to store categoryfor this expense, Give me only one category for this description: ${description}`
        })
    await expenseTable.create({amount, description, isIncome, category: category.text, userId});

    res.status(200).json({message: "Income Added!"})
} catch (error) {
    console.log(error)
    res.status(400).json({message: "Something went wrong!"})
}
}

module.exports = {
    addIncome
}