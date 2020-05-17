// En javascript, se suele usar como primer
// argumento en callbacks el error, este primer
// argumento debe ser administrado por todas
// las funciones que sean creadas
function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch(e) {
            callback(e);
        }
    }, 1000)
}

// Al llamar a la función, se espera que devuelva
// como primer argumento el error y luego el resto
// de argumentos
asincrona(function(err, dato) {
    // El error es lo primero que se
    // debe validar en el callback.
    if(err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }
    console.log('Todo ha ido bien, mi data es ', dato)
})
// La llamada fallará ya que z no está definido.

// try/catch no atrapa el error ya que
// la función es asincrona
try {
    asincrona(function(err, dato) {
        if(err) {
            throw err;
        }
        console.log('Todo ha ido bien, mi data es ', dato)
    })
} catch(err) {
    console.log('Encontré un error')
}