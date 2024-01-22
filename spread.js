const PrintPokemonInfo = (name, ps, atk, def, speed) => {
   console.log("Nombre: ", name);
   console.log("Vida: ", ps);
   console.log("Ataque: ", atk);
   console.log("Defensa: ", def);
   console.log("Velocidad: ", speed);
};

let pokemonData = ["Pikachu", 35, 55, 40, 90];

PrintPokemonInfo(
   pokemonData[0],
   pokemonData[1],
   pokemonData[2],
   pokemonData[3],
   pokemonData[4],
   pokemonData[5]
);
PrintPokemonInfo(...pokemonData);
