const img = document.querySelector("img");

function callback(event) {
  console.log(event);
}

//img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.target);
}

//animaisLista.addEventListener("click", callbackLista);

//const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  //console.log(event);
  console.log(this.getAttribute("href"));
  console.log(event.currentTarget);
}

//linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");
function callback(event) {
  console.log(event.type, event);
}

/* h1.addEventListener("click", callback);
h1.addEventListener("mouseenter", callback);
//h1.addEventListener("mousemove", callback);
window.addEventListener("scroll", callback);
window.addEventListener("resize", callback);
window.addEventListener("keydown", callback); */

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  } else if (event.key === "v") {
    document.body.classList.toggle("vermelho");
  } else if (event.key === "f") {
    document.body.classList.toggle('fullscreen');
  }
}
window.addEventListener("keydown", handleKeyboard);
