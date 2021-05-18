const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        // Init
        this.port = process.env.PORT;
        this.app = express();
        // Endpoints
        this.usersPath = '/api/users';
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use(cors());
        // Read and parser from Body
        this.app.use(express.json())
        // Public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server connected, run in port ${this.port}`)
        });
    }
}

module.exports = Server;
