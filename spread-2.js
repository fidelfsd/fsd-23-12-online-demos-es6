const numeros1 = [1, 2, 3, 4];
// const numeros2 = numeros1; NO ES CORRECTO
const numeros2 = [...numeros1];

numeros1.push(5);

console.log(numeros1);
console.log(numeros2);
