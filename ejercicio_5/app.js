
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

const person = (person) => {
    const personObj = {
        nombre: `${person.results[0].name.first} ${person.results[0].name.last}`,
        genero: person.results[0].gender,
        pais: person.results[0].location.country,
        estado: person.results[0].location.state,
        ciudad: person.results[0].location.city,
        calle: person.results[0].location.street.name,
        nro: person.results[0].location.street.number,
        cp: person.results[0].location.postcode,
        email: person.results[0].email,
        nombreUsuario: person.results[0].login.username,
        password: person.results[0].login.password
    }
  
        console.log(personObj) 
    }
obtenerPersonaFake(person);


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido

