
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(e => console.log( `${e[0].setup} ${e[0].punchline}`)) ;
