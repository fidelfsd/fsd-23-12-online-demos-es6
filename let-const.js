let Pikachu = 40;
Pikachu = 70;
var Charmander = 60;

{
   let Pikachu = 0.4;
   var Charmander = 0.6;

   console.log(Pikachu, Charmander);
   // Pikachu: 0.4, Charmander: 0.6
}

console.log(Pikachu, Charmander);
// Pikachu: 40, Charmander: 0.6

// -----------------------------------------------------------------------------

// Ejemplo 1: Variables
const IMPACTRUENO = 40;
let TRUENO = 110;

// IMPACTRUENO = TRUENO; // TypeError

// Ejemplo 2: Arrays
const array = [5, 6];
array.push(7);
console.log(array); // [5,6,7]

{
   const array = [5, 6]; // TypeError
}
// ARRAY[0] = 3; // Item no es Inmutable
// console.log(ARRAY); // [3,6,7]

for (let i = 0; i < array.length; i++) {
   console.log(i);
}
