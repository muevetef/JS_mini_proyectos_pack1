const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const textColor = document.querySelector(".color")

//Creramos una function que devuelva un color aleatorio de la lista colors
function generarNumeroAleatorio(rango){
    return Math.floor(Math.random() * rango) 
}

btn.addEventListener("click", function (){
    //Obtener un numero aleatorio
    const randomIndex = generarNumeroAleatorio(colors.length)
    const randomColor = colors[randomIndex]
    //Cambiamos el color de fondo
    document.body.style.backgroundColor = randomColor
    //Cambiamos el texto con el nombre del color seleccionado
    textColor.textContent = randomColor
})
