const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//Traenos el boton y el elemento texto del color
const btn = document.getElementById("btn");
const textColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  //Rellenamos la cadena de texto con 6 valores aleatorios del array hex
  for (let i = 0; i < 6; i++) {
    const randomIndex = generarNumeroAleatorio(hex.length);
    hexColor = hexColor + hex[randomIndex];
  }
  console.log(hexColor);
  //Cambiamos el color de fondo
  document.body.style.backgroundColor = hexColor;
  //Cambiamos el texto con el nombre del color seleccionado
  textColor.textContent = hexColor;
});
//Creramos una function que devuelva un color aleatorio de la lista colors
function generarNumeroAleatorio(rango) {
  return Math.floor(Math.random() * rango);
}
