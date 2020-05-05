// process viene pre cargado en módulo global
// const process = require('process');

// función en beforeExit se llama cuando
// se va a terminar el proceso
process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

// función en exit es llamada cuando se
// acaba el proceso
process.on('exit', () => {
    console.log('El proceso acabó');
    // Cuando uno está en exit, el event loop
    // ya fue desconectado
    setTimeout(() => {
        console.log('Este mensaje nunca será mostrado');
    }, 0)
});

setTimeout(() => {
    console.log('Este mensaje si se va a ver');
}, 0)

// función en uncaughtException se ejecuta
// al haber un error que no ha sido administrado
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidade capturar un error')
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0)
})
funcionNoDeclarada(); // Ejemplo de error de función

// función en unhandledRejection se ejecuta cuando
// una promesa no tiene un manejador de errores
process.on('unhandledRejection', (reason, promise) => {
    console.error('Vaya, se nos ha olvidade capturar un error');
    console.error(reason);
})
function Recurso() {
    this.cargado = Promise.reject(new Error('No hay datos'));
}
// const recurso = new Recurso(); // Ejemplo de reject