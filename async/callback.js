function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre)
        otroCallback();
    },800)
}

console.log('Iniciando proceso...');
hola('Luis', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});

// Si una no fuera el callback del otro
// El adios se ejecutaría antes que hola
// ya que solo tiene un retardo de 800
// contra un retardo de 1000
// El callback tambien permite pasar
// variables entre funciones