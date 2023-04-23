require('dotenv').config();
const server = require('./models/server');
const app = server.app;

server.listen();

module.exports = { app, server };