//Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS'];

//ForEach: Se ejecuta una vez por cada elemento del array, solo te permite acceder a los elementos del array
const arrayForEach = tecnologias.forEach( function(tech){
    return tech;
});


//Map: Se ejecuta una vez por cada elemento del array, te permite acceder a los elementos del array y 
//crear un nuevo array
const arrayMap = tecnologias.map( function(tech){
    return tech;
});


console.log(arrayForEach);
console.log(arrayMap);