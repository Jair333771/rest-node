const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Valor a multiplicar',
    demandOption: true
})
.option('l', {
    alias: 'list',
    type: 'boolean',
    describe: 'Mostrar la lista',
    demandOption: false,
    default: true
})
.check((argv, options ) => {
    if (isNaN(argv.b))
        throw `El valor de la base (b) debe ser un número`;
    if (typeof argv.l !== "boolean")
        throw `El valor de la list (l) debe ser de tipo boolean`;
    return true;
})
.argv;

module.exports = argv;