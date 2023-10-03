//Condicional Ternario

const autenticado = true;

autenticado ? console.log('Si esta autenticado') : console.log('No esta autenticado');

//Doble ternario
const saldo = 600;
const pagar = 500;
const tarjeta = true;

saldo > pagar ? 
    console.log('Si puedes pagar con saldo') : 
    tarjeta ? 
        console.log('Si puedes pagar con tarjeta') :
        console.log('No puedes pagar');