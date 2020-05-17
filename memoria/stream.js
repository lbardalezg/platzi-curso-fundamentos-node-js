const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '\\input.txt');
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
    data += chunk;
})

readableStream.on('end', function() {
    console.log(data);
});

// Escritura directa en consola
// stdout es un buffer de escritura
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');

// Transform permite aplicar cambios
// a data antes de ser enviada
// Trabaja como stream

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

// Aplicar en datos provenientes de
// readableStream el Tranform mayus
// antes de enviarlos a stdout
readableStream
    .pipe(mayus)
    .pipe(process.stdout);