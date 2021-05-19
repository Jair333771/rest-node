const Server = require('./configuration/server');

require('dotenv').config();

const server = new Server();
server.listen();
