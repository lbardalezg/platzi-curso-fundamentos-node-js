// Es buena practica definir las
// variables de entorno con mayusculas
// y subguiones VARIABLE_DE_ENTORNO

// Variable de entorno NOMBRE
// Si la variable de entorno no tiene
// valor, se asigna 'sin nombre'
let nombre = process.env.NOMBRE || 'sin nombre';
// Variable de entorno NOMBRE
let web = process.env.WEB || 'sin nombre';
// Para setear estas variables de entorno
// llamar desde línea de comandos asignando
// los valores de las variables.
// VARIABLE1=valor1 VARIABLE2=valor2 node ruta/de/script.js

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);

// Para que el código sea reiniciado
// automaticamente al guardar cambios,
// se puede utilizar nodemon.
// INSTALACIÓN: npm install -g nodemon
// USO: Eeemplazar node por nodemon al ejecutar
// EJEMPLO: nodemon ruta/de/script.js