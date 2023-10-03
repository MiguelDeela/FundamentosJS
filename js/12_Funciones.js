//Funciones - Function declaration

/*function sumar(numero, numero2 = 0) {
    console.log(numero + numero2);
}

sumar(10, 20);
sumar(10, 45);
sumar(5);*/

//Funcion que retorna un array
/*function sumar(numero, numero2 = 0) {
    return [numero + numero2, 'Hola Mundo'];
}

const [resultado, holaMundo] = sumar(20, 30);
console.log(resultado);
console.log(holaMundo);*/


//Funcion que retorna un objeto
function sumar(numero, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundo'
    };
}

const {resultado, mensaje} = sumar(20, 30);
console.log(resultado);
console.log(mensaje);