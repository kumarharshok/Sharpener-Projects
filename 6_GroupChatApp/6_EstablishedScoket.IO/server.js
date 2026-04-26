const app = require('./app');
const sequelize = require('./config/db');
require('./model/users');
require('./model/chats');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

io.on("connection", (socket) => {

    socket.on("send_message", (data) => {
        io.emit("receive_message", data);
    });

});

sequelize.sync()
.then(()=> {
    server.listen(4000, () => {
        console.log("Database Sync and Server is running properly...!");
    })
})
.catch((error) => {
    console.log("Something went wrong during sync & run server...!")
})