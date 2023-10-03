//Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

//then es una promesa
//status 200 es que todo esta bien

//async: es una funcion asincrona que retorna una promesa
//await: espera a que se ejecute la promesa para continuar con el codigo
const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach( comentario => {
        console.log(comentario);
    })
}

consultarAPI();