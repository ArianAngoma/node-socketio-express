// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMsg = document.querySelector('#txtMsg');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

// Resive el payload enviado desde el servidor
socket.on('send-msg', (payload) => {
    console.log(payload);
})

btnSend.addEventListener('click', () => {
    const msg = txtMsg.value;

    const payload = {
        msg,
        date: new Date().getTime()
    }

    // Envia el mensaje (msg) hacia el servidor
    /* socket.emit('send-msg', msg); */

    // Envia el mensaje hacia el servidor para que se muestre solo al mismo cliente
    socket.emit('send-msg', payload, (id) => {
        console.log('Desde el server', id);
    });


})