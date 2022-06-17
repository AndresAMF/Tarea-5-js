/*---------------EJERCICIO 1, 2, 3---------------*/

//Función fibonacci, retorna la secuencia de numeros fibonacci hasta que alcanza el valor 1000
//Separa los numeros en pares e impares dentro de la secuencia de fibonacci

const fibonacci = () => {
  let par = [];
  let imp = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < 1000; i++) {
    i = a + b;
    a = b;
    b = i;
    sum = 0;
    if (i % 2 == 0) {
      par.push(sum + i);
    } else {
      imp.push(sum + i);
    }
    console.log("Fibonacci", i);
  }
  console.log("Pares", par);
  console.log("Impares", imp);
};

fibonacci();

/*---------------EJERCICIO 4---------------*/

//Función que pasa todos los valores de un array a mayúsculas
const mayus = () => {
  const arr = ["Pedro", "Daniela", "Martín", "Carla", "Juan", "María"];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
  }
};

mayus();

/*---------------EJERCICIO 5---------------*/
//Función que busca los pokemones tipo fuego y retorna sus nombres

const fuego = () => {
  const pokemones = [
    { name: "Pikachu", type: "Electric" },
    { name: "Charmander", type: "Fire" },
    { name: "Bulbasaur", type: "Grass" },
    { name: "Squirtle", type: "Water" },
    { name: "Vulpix", type: "Fire" },
    { name: "Venusaur", type: "Grass" },
    { name: "Charizard", type: "Fire" },
  ];

  pokemones.forEach((pokemon) => {
    if (pokemon.type == "Fire") {
      console.log(pokemon.name);
    }
  });
};

fuego();
