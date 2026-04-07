const db = require('../utils/db');
const addBus = (req, res) => {
const {bus_name, total_seats, available_seats} = req.body;
const addBusData = "INSERT INTO buses (bus_name, total_seats, available_seats) VALUES (?,?,?)";
db.query(addBusData,[bus_name, total_seats,available_seats], (error, results) => {
    if(error) {
        console.log("Error inserting data: ", error);
        return res.status(500).send("Error inserting data");
    }
    console.log("value inserted successfully!");
    res.status(200).send(`Data inserted successfully! with ${bus_name}`);
})
}

const showData = (req, res) => {
    const value = req.params.value;
    console.log("params value: ", value);
    const showFilterData = "SELECT * FROM buses WHERE available_seats > ? ";
    db.query(showFilterData, [value], (error, results) => {
        if(error) {
            console.log("Error showing buses data: ", error);
            return res.status(500).send("Error fetching data");
        }
        console.log("Data fetched successfully!");
        console.log(results);
        res.status(200).send(results);
    })
}

module.exports = {addBus, showData};