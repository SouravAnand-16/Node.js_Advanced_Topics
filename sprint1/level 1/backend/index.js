// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'join') {
            if (!data.username) {
                socket.send(JSON.stringify({ type: 'error', message: 'Please provide a username.' }));
            } else {
                socket.username = data.username;
                socket.send(JSON.stringify({ type: 'system', message: 'Hello from server' }));
                socket.send(JSON.stringify({ type: 'system', message: `Welcome, ${socket.username}` }));
            }
        } else if (data.type === 'message') {
            if (!socket.username) {
                socket.send(JSON.stringify({ type: 'error', message: 'Please join the chat before sending messages.' }));
            } else {
                if (data.message === 'hi') {
                    socket.send(JSON.stringify({ type: 'message', username: 'Server', message: 'Hello' }));
                } else if (data.message === 'bye') {
                    socket.send(JSON.stringify({ type: 'message', username: 'Server', message: 'Bye bye!' }));
                } else {
                    socket.send(JSON.stringify({ type: 'message', username: 'Server', message: "Sorry, I don't understand" }));
                }
            }
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
