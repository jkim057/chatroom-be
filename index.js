// requirements/ dependancies
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const router = require('./router')

const socketio = require('socket.io');
const io = socketio(server)
// const io = require('socket.io')(3000)

// youtube set io variable require socket.io & then put a local host # there
// offical docs set socket.io requirement seperate in order to be able to create server with http



// using local port 5678 for dev, but using PORT as env key for production.
const PORT = process.env.PORT || 5678






// function fires everytime client connects to server & give socket instance
io.on('connection', socket =>{
    console.log(`User has joined. ${socket.id} `)

    io.on('disconnect', () => {
        console.log('User has left.')
    })
}) 




// middleware

app.use(router)


// Runs the port

server.listen(PORT, () => console.log(`Server has started on part ${PORT}`));

