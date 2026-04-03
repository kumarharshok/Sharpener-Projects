
const fs = require('fs');
    let messages = [];

const handler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/') {

        let messageList = '';

        messages.forEach(msg => {
            messageList += `<li>${msg}</li> `
        })

        const html = `
        <html>
        <body>
        <h1>Messages</h1>
        <form action="/submit" method="POST">
        <label for="message">Message:</label>
        <input type="text" id="message" name="message" required>
        <button type="submit">Add</button>
        </form>

        <ul>
        ${messageList}
        </ul>
        </body>
        </html>
        `;

        res.statusCode =200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);




        // fs.readFile('index.html', 'utf-8', (error, data) =>{
        //     if(error) {
        //         res.statusCode = 500;
        //         res.setHeader('Content-Type', 'text/plain');
        //         res.end('Sorry an error occurred while loading the page.');
        //     } else {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'text/html');
        //         res.end(data);
        //     }
        // })
    } else if(url === '/submit' && method === 'POST') {
        let body = [];

        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);
            const message = params.get('message');
            console.log("Form data: ", message);

            messages.unshift(message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        })
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
}

module.exports = {
    handler
};