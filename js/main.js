
const menuItem = document.querySelectorAll(".menu-item a");
menuItem.forEach(function(item) {
  item.addEventListener("click", function(e) {
    e.target.classList.toggle("clicked");
  });
});


const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function(e) {
    e.target.classList.toggle('resaltado');
});


const hablemos = document.querySelector("h2");
hablemos.addEventListener("mouseover", function(e) {
    e.target.classList.toggle('hablemos');
});

const modificado = document.querySelectorAll(".resaltar");
modificado.forEach(function(item) {
  item.addEventListener("mouseup", function(e) {
    e.target.classList.toggle("parrafo_modificado");
  });
});

