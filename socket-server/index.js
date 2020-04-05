let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let port = process.env.port || 3001;

io.on('connection', (socket) => {
    socket.on('disconnect', () => io
        .emit('users-changed', {user: socket.username, event: 'left'}));

    socket.on('set-user', user =>  {
        socket.username = user.name;
        socket.image = user.image;
        io.emit('users-changed', {user: user.name, event: 'joined'})});
 

    socket.on('send-message', message => io
        .emit('message', {msg: message.text, user: socket.username, createdAt: new Date(), image: socket.image}));

});


server.listen(port, () => console.log(`listening in http://localhost:${port}`))