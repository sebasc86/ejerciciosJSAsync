const fetch = require("node-fetch")

const pokemones = require("./library");

// mi funcion fetch dentro de library 
pokemones.pokemon('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(pokemon => {
        let abilites = pokemon.abilities.map(abilitie => {
            return abilitie.ability.name
        });
        console.log(`Nombre: ${pokemon.name} \nHabilidades: ${abilites}`)

    })

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
pokemones.obtenerPokemon('pikachu')
    .then(pokemon => {
        let abilites = pokemon.abilities.map(abilitie => {
            return abilitie.ability.name
        });
        console.log(`Nombre: ${pokemon.name} \nHabilidades: ${abilites}`)

    })