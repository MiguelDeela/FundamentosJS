//Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS'];

//Anadir un elemento al array
//tecnologias.push('GraphQL'); //Al final
//tecnologias.unshift('GraphQL'); //Al inicio

//const nuevoArreglo = [...tecnologias, 'GraphQL']; //Esto esta bien
//const nuevoArreglo = ['GraphQL', ...tecnologias]; //Esto esta bien


//Eliminar elemento del array
//tecnologias.pop(); //Al final
//tecnologias.shift(); //Al inicio
//tecnologias.splice(2, 2); //Desde donde y cuantos

/*const nuevoArray = tecnologias.filter( function(tech){
    return tech !== 'HTML';
});*/ //Esto esta bien


//Reemplazar un elemento del array
//tecnologias[1] = 'CSS3'; //Esto esta mal

const nuevoArray = tecnologias.map( function(tech){
    if(tech === 'HTML'){
        return 'GraphQL';
    }else{
        return tech;
    }
}); //Esto esta bien


//console.table(tecnologias);
console.table(nuevoArray);