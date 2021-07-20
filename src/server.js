const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  // On user connection
  socket.on('connect to server', (username) => {
    io.emit('recieve console message', username + " has connected to the server")
    console.log(`[UserConnect@${username}]: Connected`);
  });

  // On disconnect
  socket.on('disconnect', () => {
    io.emit('recieve console message', "A user has disconnected from the server")
    console.log("[UserDisconnect@UnknownUsername]: Disconnected");
  });

  // On message sent
  socket.on('send message', (msg, username) => {
    console.log(`[UserMessage@${username}]: ` + msg)
    io.emit('recieve user message', msg, username);
  });

});

// Open localhost server
server.listen(3000, () => {
  console.log('Localhost server now running on "localhost:3000"');
});