const path = require('path');

const showForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/student.html'));
}
module.exports = {showForm};