const {v4: uuidv4} = require('uuid');

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('send-msg', (payload, callback) => {
        // Envia el mensaje (payload) hacia el cliente
        socket.broadcast.emit('send-msg', payload);

        // Retorna el id solo para el mismo cliente
        const id = uuidv4();
        callback(id);

    })
}

module.exports = {
    socketController
}