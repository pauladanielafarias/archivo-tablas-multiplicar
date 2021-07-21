const fs = require('fs');
const colors = require('colors')

const crearArchivoTablas = async(base, mostrar, hasta)=>{
    try {
        let salida='';
        let titulo =`================= \nTabla del ${base} al ${hasta}\n=================\n`;
        
        for(i=1;i<=hasta;i++){
            salida += `${i} x ${base} = ${i*base} \n`;
        }
        if(mostrar){
            console.log(colors.rainbow(titulo) + salida)
        }

        let nombreArchivo=`tabla-${base}-al-${hasta}.txt`;
        fs.writeFileSync('./salida/'+nombreArchivo, titulo + salida);
        
        return nombreArchivo

    } catch (error) {
        throw error;
    }

    
}

// exports
module.exports = {
    crearArchivoTablas
}