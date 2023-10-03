//Scope

const precio = 300;

function unaFuncion() {
    const precio = 600;
    console.log(precio); //600 si no existe la variable en el scope local, busca en el scope global (300)
}

console.log(precio); //300 

unaFuncion();