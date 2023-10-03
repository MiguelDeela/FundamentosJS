//Eventos del DOM - Clicks

const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click';
});

//Esto es lo mismo que lo anterior, pero con una función separada
/*heading.addEventListener('click', clickHeading);

function clickHeading() {
    console.log('Diste click en heading');
}*/

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace');
    })
})

