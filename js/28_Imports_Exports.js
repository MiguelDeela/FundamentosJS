//Imports y exports
//Para que funcione hay que agregar en el package.json "type": "module" o en el script.

import {sumar as suma} from "./funciones.js";

const resultado = suma(20, 30);

console.log(resultado);