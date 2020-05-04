let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++;
}, 1000);

// Se ejecuta inmediatamente
// pero luego que haya acabado
// todas las llamadas principales
setImmediate(() => {
    console.log('Hola Immediate')
})

// Muestra objeto global
// en este están definidas las funciones
// que pueden ser ejecutadas sin importación
// y variables y funciones globales
// console.log(global)

// Muestra process, dentro hay varias cosas,
// un ejemploson las variables de entorno
// console.log(process);

// Setear una variable global
// no es recomendable
global.miVariable = 'valor global'
console.log(miVariable)

console.log(__dirname)
console.log(__filename)