//pkgs
const colors = require('colors')
//funciones y variables importadas de otros archivos
const {crearArchivoTablas} = require('./scripts/archivo-tablas')
const argv = require('./config/yargs')

console.clear();

//console.log(process.argv)
//console.log(argv)


let base = argv.b;
console.log('número base:', base);
let mostrar = argv.m;
let hasta = argv.h;

crearArchivoTablas(base, mostrar, hasta)
    .then(archivoCreado => console.log(colors.magenta(archivoCreado), colors.bold.green('creado')))
    .catch(err => console.log(err))



