//Fetch API - Async Await (Multiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

//then es una promesa
//status 200 es que todo esta bien


const consultarAPI = async () => {
    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado);
    /*resultado.forEach( comentario => {
        console.log(comentario);
    })*/
    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    console.log(resultado2);

    const fin = performance.now()

    console.log(`Ejecución PRIMER Async: ${fin - inicio} ms`);
}

consultarAPI();

const consultarAPI2 = async () => {
    const inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado);
    console.log(resultado2);

    const fin = performance.now()

    console.log(`Ejecución SEGUNDO Async: ${fin - inicio} ms`);
}

consultarAPI2();