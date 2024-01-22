let nombre = "Bob";
let edad = 44;
let ciudad = "Barcelona";

let persona = {
   nombre,
   edad,
   ciudad,
   saludar() {
      console.log("Hola");
   },
};

console.log(persona);
persona.saludar();
