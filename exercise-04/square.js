// Archivo `square.js`

const square = (num) => {
  /* Acá va tu código */
if (num === undefined || typeof num === "string") {
  return "Error";
}
/*typeof para saber que tipo de dato que es (numer, string)se puede incluir en el if de arriba ya que en ambos caso se pone que retorna ERROR
if (typeof num === "string") {
  return "Error";
} */
return num * num; //para que devuelva por cuadrado
/* Se podría hacer con
Math.pow(numero, exponente)
se veria asi
Math.pow(num,2); */
};

module.exports = square;
