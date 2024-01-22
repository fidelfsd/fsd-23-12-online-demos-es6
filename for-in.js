let persona = {
   nombre: "Maria",
   edad: 33,
   altura: 165,
};

console.log(persona.nombre);

for (let propiedad in persona) {
   //    console.log(propiedad);
   console.log(persona[propiedad]);
}
