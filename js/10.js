//Destructuring de arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS'];

const [, , , , var5] = tecnologias;//Se extrae el valor de la posicion 5

console.log(var5);

//Destructuring de objetos
const cliente = {
    nombre: 'Juan',
    tipo: 'Premium',
}

const {tipo} = cliente;
console.log(tipo);