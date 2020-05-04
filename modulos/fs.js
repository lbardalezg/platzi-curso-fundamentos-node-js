const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if(err) {
            console.error('No he podido escribirlo', error);
        } else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

// Descomentar una por una para ejecutar
// No se ejecutan secuencialmente ya que
// no se ha planteado secuencialmente con
// el uso de callback/promise/aync-await
// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo1.txt', "Soy un archivo nuevo", console.log)
// leer(__dirname + '/archivo1.txt', console.log);
// borrar(__dirname + '/archivo1.txt', console.log);