console.log('Algo')

console.warn('Alguna advertencia')

console.error('Algun error')

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

// Muestra tabla correctamente tabulada
console.table(tabla)

console.group('Conversación')
// Todo lo que esté dentro de conversación
// será logueado con identación
// <--
console.log('Hola');
// Se pueden crear grupos dentro de grupos
// se agregará identaciones adicionales
console.group('bla');
// <----
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('bla')
// ---->
console.groupEnd('Conversación')
// -->
// Mensajes fuera del grupo serán logueados normalmente
console.log('otras cosas de otra función')

// console.group permite hacer seguimiento
// de en que nivel de llamada se ejecutó
// el log
function function1() {
    console.group('function 1')
    console.log('Esto es de la función 1')
    console.log('Esto también es de la función 1')
    function2();
    console.log('Hemos vuelto a la función 1')
    console.groupEnd('function 1')
}
function function2() {
    console.group('function 2')
    console.log('ahora estamos en la función 2')
    console.groupEnd('function 2')
}
function1();

// console.log leva una cuenta de cuantas
// veces es llamado y lo muestra en pantalla
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces') // Reinicia contador
console.count('veces')
console.count('veces')