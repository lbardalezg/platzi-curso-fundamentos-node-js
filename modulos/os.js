const os = require('os');

console.log(os.arch()); // Arqitectura del sistema
console.log(os.platform()); // Sistema operativo

console.log(os.cpus()); // Información de los CPUs
console.log(os.cpus().length); // Número de nucleos

console.log(os.constants); // Errores y señales del sistema

console.log(os.freemem()); // Memoria libre
const SIZE = 1024;
function kb(bytes) {return bytes / SIZE};
function mb(bytes) {return kb(bytes) / SIZE};
function gb(bytes) {return mb(bytes) / SIZE};
console.log(gb(os.freemem()) + ' GBs libres'); // Memoria libre
console.log(gb(os.totalmem())); // Memoria total

console.log(os.homedir()); // Directorio de usuario
console.log(os.tmpdir()); // Ruta de archivos temporales

console.log(os.hostname()); // Nombre de máquina en red
console.log(os.networkInterfaces()); // Interfaces de red