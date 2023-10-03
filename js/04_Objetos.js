//Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring - extraer valores de un objeto. Es lo mismo que lo de arriba console.log(producto.nombre); ...
const{ nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

//Object literal enhancement - crea un nuevo objeto con los valores de otro objeto. Es lo contrario de destructuring.
const autemticado = true;
const usuario = "Juan";

const nuevoObjeto = { 
    autemticado, 
    usuario
};
console.table(nuevoObjeto);