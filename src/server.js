const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cParser = require("./commandParser")

// Variables
let playersOnline = 0

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  // On user connection
  socket.on('connect to server', (username) => {
    io.emit('recieve console chat message', username + " has connected to the server")
    console.log(`[UserConnect@${username}]: Connected`);
    playersOnline++
  });

  // On disconnect
  socket.on('disconnect', () => {
    io.emit('recieve console chat message', "A user has disconnected from the server")
    console.log("[UserDisconnect@UnknownUsername]: Disconnected");
    playersOnline--
  });

  // On message sent
  socket.on('send message', (msg, username) => {
    console.log(`[UserMessage@${username}]: ` + msg)
    io.emit('recieve user chat message', msg, username);
  });

  // On command sent
  socket.on('run command', (command, username) => {
    var commandArgs = command.split(" ")
    cParser.parse(commandArgs, socket, io, username, playersOnline)
    console.log(`[UserCommand@${username}]: ` + command)
  });

});

// Open localhost server
server.listen(3000, () => {
  console.log('Localhost server now running on "localhost:3000"');
});