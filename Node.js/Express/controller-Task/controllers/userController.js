
const getAllUser = (req, res) => {
    res.send('Fetch all users.');
}
const getUserById = (req, res) => {
    res.send(`Fetch user with id ${req.params.id}`);
}

const createUser = (req, res) => {
    res.send('Add new user.')
}

module.exports = { getAllUser, getUserById, createUser }