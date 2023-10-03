//Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

//then es una promesa
//status 200 es que todo esta bien


const consultarAPI = () => {
    fetch(url)
    .then( respuesta => respuesta.json())   //Se busca el valor de la promesa (respuesta)

    .then( resultado => {    //Se busca el valor de la promesa (resultado)
        //console.log(resultado);
        resultado.forEach( comentario => {
            console.log(comentario);
        })
    })
}

consultarAPI();