const express = require('express');
const app = express();
const io = require('socket.io')(3000,{
    cors:{
        origin:['http://localhost:8080']
    }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(`${socket.id}`);
    
    socket.on('send', (mess, room) => {
        if (room === '') {
            socket.broadcast.emit('recived', mess);
        } else {
            socket.to(room).emit('recived', mess);
        }
    });
});

app.get('/', (req, res) => {
    res.send('Messenger');
});

app.listen(8080, () => {
    console.log('Server listening at http://localhost:8080');
});
