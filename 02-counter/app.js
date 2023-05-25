//Version doble tirabuzón
let contador = 0;

const txtValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn")

btns.forEach(function (miBoton){
    miBoton.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            contador--;
        }else if(styles.contains("increase")){
            contador++
        }else{
            contador = 0;
        }

        if(contador > 0){
            value.style.color = "green"
        }
        if(contador < 0){
            value.style.color = "green"
        }
        if(contador == 0){
            value.style.color = "green"
        }
        //Actualizar el valor de txtValue
        value.textContent = contador;

    })
})
// for(let i=0;i < btns.length;i++){
//     const btnActual = btns[i]
//     btnActual.addEventListener("click", function(e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains("decrease")){
//             contador--;
//         }else if(styles.contains("increase")){
//             contador++
//         }else{
//             contador = 0;
//         }

//         if(contador > 0){
//             value.style.color = "green"
//         }
//         if(contador < 0){
//             value.style.color = "green"
//         }
//         if(contador == 0){
//             value.style.color = "green"
//         }
//         //Actualizar el valor de txtValue
//         value.textContent = contador;

//     })
// }

