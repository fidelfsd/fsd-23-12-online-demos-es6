let getNombreFinal = (numero, prefijo = "RX") => prefijo + numero;

let random = Math.floor(Math.random() * 999);

let resultado = getNombreFinal(random);

console.log("El robot se llama: ", resultado);
