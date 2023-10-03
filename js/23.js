//Manipular elementos html con javascript

const heading = document.querySelector('.heading'); //Seleccionamos el elemento h2
heading.textContent = 'Nuevo Heading'; //Modificamos el texto del elemento h2
console.log(heading.textContent); //Obtenemos el texto del elemento h2

const inputNombre = document.querySelector('#nombre'); //Seleccionamos el elemento input
inputNombre.value = 'Un valor por default'; //Modificamos el valor del elemento input
console.log(inputNombre);

const enlaces = document.querySelectorAll('.navegacion a'); //Seleccionamos todos los elementos a
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace'); //Modificamos el texto de todos los elementos a