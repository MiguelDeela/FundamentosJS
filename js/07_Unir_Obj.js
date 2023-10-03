//Unir dos objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Juan",
    premium: true
};

//producto.cliente = cliente; //Agrega el objeto cliente al objeto producto, Pero esto no es una buena práctica
//const nuevoObjeto = Object.assign(producto, cliente); //Une los dos objetos en uno solo, pero esto no es una buena práctica
//const nuevoObjeto = {...producto, ...cliente}; //Une los dos objetos en uno solo, pero esto no es una buena práctica

//Para que no se modifique el objeto producto, se crea un nuevo objeto que contenga el objeto producto y el cliente.
const nuevoObjeto ={
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto);
//console.log(producto); //El objeto producto se modifica (muto)
//console.log(cliente); //El objeto cliente no se modifica (no muto)