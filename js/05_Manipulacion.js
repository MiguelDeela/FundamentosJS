//Objetos - Manipulación de objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

//Object.freeze(producto); //Congelar un objeto para que no se pueda modificar
//Object.seal(producto); //No permite agregar ni eliminar propiedades, pero si modificar las existentes

//Reescribir un valor
producto.nombre = "Monitor Curvo";

//Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;

console.table(producto);