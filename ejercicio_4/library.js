const rp = require("request-promise");
const fetch = require("node-fetch")


function obtenerPokemon(nombrePokemon){

    var options ={
        uri: "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon,
        json:true
    }

    return rp(options);

}


// mi funcion
const pokemon = (url) => new Promise((resolve, reject) => { 
        fetch(url)
        .then(response => response.json())
        .then(json => resolve(json)) 
})

module.exports = {
    obtenerPokemon,
    pokemon
}

