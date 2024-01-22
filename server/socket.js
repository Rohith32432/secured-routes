const express = require('express');
const app = express();
const io = require('socket.io')(3000,{
    cors:{
        origin:['http://localhost:8080']
    }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log(`A user connected with socket ID: ${socket.id}`);
    socket.on('send',mess=>{
        io.emit('recived',mess)
        console.log(mess);
    })

});

app.get('/', (req, res) => {
    res.send('Messenger');
});

app.listen(8080, () => {
    console.log('Server listening at http://localhost:8080');
});
