// Archivo `add.spec.js`:

const add = require('./add');

console.log('debería devolver la suma de dos números');
if (add(2,5) === 7) { // funcion ok
  console.log('✓ ok'); // (a,b) a+b esto debe ser 2°
} else {
  console.error('✗ fail');
}

console.log('debería devolver la suma de sus parametros incluso si uno es string');
if (add(2, '2') === '22') { //string + number esto es 2° 
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver "Error" si falta uno de los parámetros');
if (add(2) === 'Error') {
  console.log('✓ ok'); // add (a,x) esto es 1° por lo tanto deberia decir que es undefined
} else {
  console.error('✗ fail');
}