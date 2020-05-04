const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec ejecuta comando de línea de
// comandos
exec ('ls -la', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

// exec incluso puede ejecutar otros scripts
// ya que se llaman como línea de comando
exec ('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

// spawn permite interactuar con el proceso
let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', function(dato) {
    console.log('Está muerto?')
    console.log(proceso.killed)
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('el proceso terminó');
})