const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const main = document.querySelector("#ocultar");
const logo = document.querySelector("#logo");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  main.classList.add("ocultar");
  logo.classList.add("superponer");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  main.classList.remove("ocultar");
  logo.classList.remove("superponer");
});
