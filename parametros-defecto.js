let getPrecioFinal = (precio = 500, impuesto = 0.7) =>
   precio + precio * impuesto;

console.log(getPrecioFinal(500));
console.log(getPrecioFinal());
console.log(getPrecioFinal(500, 0.9));
