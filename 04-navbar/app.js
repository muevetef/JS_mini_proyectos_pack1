//Traemos el boton
const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".links");

//Al clicar en btn añadimos la clase show-links al menu
btn.addEventListener("click", function () {
  // if(menu.classList.contains("show-links")){
  //   menu.classList.remove("show-links")
  // }else{
  //   menu.classList.add("show-links")
  // }
    menu.classList.toggle("show-links")
});
