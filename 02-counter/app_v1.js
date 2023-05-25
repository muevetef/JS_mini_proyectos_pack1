//Variable para almacenar el valor del contador
let contador = 0;
//Referenciar los elementos html
//const value = document.querySelector("#value")
//Traemos el texto del contador
const value = document.getElementById("value");
//Traemos los botones
const btnQuitar = document.getElementById("btnQuitar");
const btnReset = document.getElementById("btnReset");
const btnAnadir = document.getElementById("btnAnadir");

//Añadir los event listeners
btnQuitar.addEventListener("click", function () {
  contador--;
  value.textContent = contador
  //Si contador < 0 la propiedad color de value es rojo
  if(contador < 0){
    value.style.color = 'red';
  }
  //Si contador es 0 la propiedad color de value es negra
  if(contador === 0){
    value.style.color = 'black';
  }
});
btnReset.addEventListener("click", function () {
  contador = 0;
  value.textContent = contador
  value.style.color = 'black';
  
});
btnAnadir.addEventListener("click",anadirOnclick());
//btnAnadir.onclick = anadirOnclick;

function anadirOnclick(){

    contador++;
    value.textContent = contador
    if(contador > 0){
      value.style.color = 'green';
    }else if(contador === 0){
      value.style.color = 'black';
    }
  
}
