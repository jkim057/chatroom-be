const io = require('socket.io')(3000)

// function fires everytime client connects to server & give socket instance
io.on('connection', socket =>{
    console.log(socket.id)
}) 