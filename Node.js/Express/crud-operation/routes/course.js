const express = require('express');
const router = express.Router();

// Dummy Data
const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// GET /courses
router.get('/', (req, res) => {
    const names = courses.map(c => c.name).join(", ");
    res.send(`Courses: ${names}`);
});

// GET /courses/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const course = courses.find(c => c.id === id);

    if (!course) {
        return res.send("Course not found");
    }

    res.send(`Course: ${course.name}, Description: ${course.description}`);
});

module.exports = router;