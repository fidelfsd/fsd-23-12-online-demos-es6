promedio = (...notas) => {
   let total = 0;
   for (let i = 0; i < notas.length; i++) {
      total += notas[i];
   }
   return total / notas.length;
};

console.log(promedio(3, 5, 6, 6, 7, 8, 10, 4));
