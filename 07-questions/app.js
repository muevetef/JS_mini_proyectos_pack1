//Seleccionar los elementos del DOM que necesitamos
//Una coleccion de los articulos que tengan la clase .question
//const questions = document.querySelectorAll(".question");
// questions.forEach((question) =>{
//     const btnArticulo = question.querySelector(".question-btn")
//     console.log(btnArticulo);
//     btnArticulo.addEventListener("click", () =>{
//         console.log(question);
//         //Miro si la lista de questiones tiene la clase show-text
//         //y se la quito si la tienen
//         questions.forEach(function(questionConclase){
//             if(question !== questionConclase){//Son el mismo elemento?
//                 questionConclase.classList.remove("show-text");
//             }
//         })
//         question.classList.toggle("show-text");
//     })
// })

//Traversing the the DOM
//Buscamos directamente todos los botones
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

document.addEventListener("click", (evt) => {
  console.log(evt.target);
  evt.target.style.color = "red";
});
