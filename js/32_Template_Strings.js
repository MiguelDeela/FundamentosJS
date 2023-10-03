//Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Samsung"

function texto(){
    return "Este tecto proviene de una funcion"
}

console.log(producto + " $" +precio + " Dolares, Marca: " + marca)

console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${texto()}`)