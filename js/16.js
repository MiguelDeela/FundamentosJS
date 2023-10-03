const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
const numeros = [10,20,30];

let nuevoArray;

// Filter
const nuevoArray2 = tecnologias.filter( tech => tech === 'React');

//Includes - Comprobar si un valor existe en un arreglo
//const resultado = tecnologias.includes('GraphQL');


//Some - Deuelve (true o false) si hay al menos un elemento que cumpla la condición 
//const resultado = numeros.some( numero => numero > 15);


//Find - Devuelve el primer elemento que cumpla la condición
//const resultado = numeros.find( numero => numero > 15);


//Every - Devuelve (true o false) si todos los elementos cumplen la condición 
//const resultado = numeros.every( numero => numero > 9);


//Reduce - Acumula los valores de un arreglo en el total, (0) es el valor inicial
//const resultado = numeros.reduce((total, numero) => numero + total, 0)


//Filter - Crea un nuevo arreglo con los elementos que cumplan la condición
//const resultado = tecnologias.filter( tech => tech === 'NodeJS');
//const resultado = numeros.filter( numero => numero > 15);


//ForEach: Se ejecuta una vez por cada elemento del array, solo te permite acceder a los elementos del array
tecnologias.forEach( (tech, index) => console.log(index) );


//Map: Se ejecuta una vez por cada elemento del array, te permite acceder a los elementos del array y 
//crear un nuevo array
const arrayMap = tecnologias.map( tech => tech );
console.log(arrayMap);


//console.log(resultado);