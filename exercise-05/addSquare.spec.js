// Archivo `addSquare.spec.js`:

const addSquare = require('./addSquare');

console.log('debería retornar la suma de los cuadrados'); //2°
if (addSquare(6, 4) === 52) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Error" si uno de los parámetros es String'); // 1°
if (addSquare('2', 4) === 'Error') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

