/*
Bonus track: les proponemos para este Proyecto 2 que busquen en la
web “cómo hacer con CSS para modificar los estilos de un
elemento al pasar el mouse sobre este”. Luego, lo aplicarán sobre
los elementos del menú y el botón “Descargar mi CV”, para que al
pasar el cursor del mouse sobre ellos cambie algo, por ejemplo el
color de fondo. */



/*titulo.*/
const titulo = document.querySelector("h1");
parrafo.addEventListener('click', function(e) {
 e.target.classList.toggle('');
})

//los li de la nav cambie de color
const menuItem = document.querySelectorAll('.menu');
menuItem.forEach(function(item) { 
    item.addEventListener('click', function(e) {
    const currentItem = document.querySelector('.active');
    currentItem.classList.remove('active');
    e.target.classList.add('active');
    })
});

//Modificar parrafo
    let parrafo = document.querySelector( '#contacto');
    parrafo.addEventListener('click', function(e) {
    e.target.classList.toggle('parrafo-modificado');
   })

 

//const otraFoto = document.querySelector("#foto");
//otraFoto.src = "./img/Foto2 Mirkala.jpg";

/*Para modificar parrafo primera clase (cuando cambiaba el color)
const parrafo = document.querySelector( '#ejemplo' );
parrafo.addEventListener('click', function(e) {
 e.target.classList.toggle('parrafo-modificado');
})



Parrafo modificado
const parrafo = document.querySelector( '#ejemplo' );
parrafo.addEventListener('click', function(e) {
 e.target.classList.toggle('parrafo-modificado');
})*/

