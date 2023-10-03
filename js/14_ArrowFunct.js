//Funciones - Arrow Functions

/*const sumar = (numero, numero2 = 0) => {
    return numero + numero2;
}*/

//const sumar = (numero, numero2 = 0) => numero + numero2; //Cuando es una sola linea de codigo se puede hacer asi

const sumar = numero => numero + 20; //Cuando es un solo parametro se pueden omitir los parentesis

const resultado = sumar(30);

console.log(resultado);