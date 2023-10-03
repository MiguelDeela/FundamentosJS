//Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Juan",
    premium: true
};

const { nombre, precio, disponible} = producto;
const { nombre : nombreCliente, premium} = cliente; //Renombrar la variable, darle un alias

console.log(nombre, precio, disponible);
console.log(nombreCliente, premium);