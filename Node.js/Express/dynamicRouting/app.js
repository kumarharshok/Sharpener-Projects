const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/profile" method="GET">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">
        <label for="role">Role:</label>
        <input type="text" id="role" name="role" placeholder="Enter your role">
        <button type="submit">Submit</button>
        </form>

        <script>
        const form = document.querySelector('form');
        const name = document.getElementById('name');
        const role = document.getElementById('role');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = \`/profile/\${name.value}/\${role.value}\`;
            })

            
        </script>
        `)
})

app.get('/profile/:name/:role', (req, res) => {
    const name = req.params.name;
    const role = req.params.role;

    res.send(`
        <h1>Welcome!</h1><br>
        <p>${name}</p>
        <p>${role}</p>
        `)
})


app.listen(4000, ()=> {
    console.log("Server is running on port 4000");
})
