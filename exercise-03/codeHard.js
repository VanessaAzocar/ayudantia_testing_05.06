// Archivo `codeHard.js`

const codeHard = (num) => {
  /* Acá va tu código */
if (num === undefined) {
  return "Error";
}
if (num % 5 === 0 && num % 3 === 0) {
  return "CodeHard";
}
if (num % 5 === 0) {
  return "Hard";
}
if (num % 3 === 0) {
  return "Code";
}
return num;
};

module.exports = codeHard;
