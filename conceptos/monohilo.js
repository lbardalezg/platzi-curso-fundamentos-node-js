console.log('Hola mundo');

let i = 0;
setInterval(function() {
    console.log(i)
    i++;
    // El siguiente código generaría un error
    // y el programa se detendría completamente
    // Siempe se debe tener en cuenta los errores
    // que pueden ocurrir en el programa y tenerlos
    // controlados
    // if(i === 5) {
    //     console.log('forzamos error');
    //     var a = 3 + z;
    // }
}, 1000)

console.log('Segunda instrucción');

// Recordando, el orden de ejecución es
// primero todo lo del programa principal
// y luego el resto de llamadas
// En este caso:
// Muestra "Hola mundo"
// Muestra "Segunda instrucción"
// Muestra cada segundo el número i