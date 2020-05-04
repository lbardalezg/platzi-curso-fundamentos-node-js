function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch(err) {
            cb(err)
        }
    });
}

try {
    //otraFuncion();
    seRompeAsincrona((err) => {
        console.log(err.message)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err); // console.error(err.message);
    console.error('Pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aquí está al final')