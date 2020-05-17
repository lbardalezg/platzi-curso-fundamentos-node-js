console.time('todo')

let suma = 0;
console.time('bucle')
for(let i=0; i<100000; i++) {
    suma += 1;
}
console.timeEnd('bucle')

let suma2 = 0;
console.time('bucle 2')
for(let i=0; i<1000000; i++) {
    suma2 += 1;
}
console.timeEnd('bucle 2')

console.timeEnd('todo')

console.time('asincrono')
console.log('Empieza el procesa asíncrono')
asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    })

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Termina el proceso asíncrono');
            resolve();
        })
    })
}