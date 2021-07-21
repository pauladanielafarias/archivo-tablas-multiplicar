//pkgs
const yargs = require('yargs');

const argv = yargs
    .options({
        'b':{
            alias:'base',
            type:'number',
            description:'Es el número base del que se quiere saber la tabla de multiplicar.',
            demandOption:true,

        },
        'm':{
            alias:'mostrar',
            type:'boolean',
            description:'Se muestra por consola los datos que se escribieron en el archivo.',
            default: false

        },
        'h':{
            alias:'hasta',
            type:'number',
            description:'Es el número hasta donde se quiere multiplicar por la base.',
            default: 10
        }
    })
    .check((argv,options)=>{

        if(isNaN(argv.b) || argv.b<=0){
            throw 'La base tiene que ser un número mayor que 0.'
        }
        if(isNaN(argv.h)|| argv.h<=0){
            throw 'El hasta tiene que ser un número mayor que 0.'
        }

        return true;
    })
    .argv;

// exports
module.exports = argv;