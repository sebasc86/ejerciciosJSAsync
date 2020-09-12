
const obtenerChiste = require("./library");

// Codigo funcion callback
let joke = (element) => element.forEach(element => {
    console.log(`${element.setup} ${element.punchline}`)
}) 

obtenerChiste(joke);
// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido





