// requirements/ dependancies
const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');

// using port 3000 for development, but later on will be switching the port # into a environmental variable to protect for production.
const PORT = process.env.PORT || 3000

const server = http.createServer(app);
const io = socketio(server)
// const io = require('socket.io')(3000)
const router = require('./router')


// the previous example i found made the io variable require socket.io and then put a local host # there
// the new example I found made the socket.io requirement seperate in order to be able to create server with http, which the offical documentation does as well.


// function fires everytime client connects to server & give socket instance
io.on('connection', socket =>{
    console.log(`User has joined. ${socket.id} `)

    socket.on('disconnect', () => {
        console.log('User has left.')
    })
}) 




// middleware

app.use(router)


// listener

server.listen(PORT, () => console.log(`Server has started on part ${PORT}`));

