const createTable = require('./helpers/multiply');
const argv = require('./config/yargs')

createTable(argv.b, argv.l)
    .then(message => console.log(message))
    .catch(err => console.log(err));
