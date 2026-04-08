const { Op } = require('sequelize');
const buses = require('../models/busesTable');

const addBus = async (req, res) => {
    const { bus_name, total_seats, available_seats } = req.body;
    try {
        await buses.create({bus_name, total_seats, available_seats});

        console.log("Value inserted successfully!");
        res.status(200).send(`Data inserted successfully! with name: ${bus_name}`);
    } catch (error) {
        console.log("Error inserting data: ", error);
        res.status(500).send("Error inserting data");
    }
}

const showAllBuses = async (req, res) => {
    const seats = req.params.seats;
    try {
        const data = await buses.findAll({where: {available_seats: {[Op.gt]: seats}}});

        console.log("Data fetched successfully!");
        res.status(200).send(data);
    } catch(error) {
        console.log("Data fetching error: ", error);
        res.status(500).send("Data fetching error");
    }
}

module.exports = {
    addBus,
    showAllBuses
}