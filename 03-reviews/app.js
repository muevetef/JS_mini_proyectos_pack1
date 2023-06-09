// local reviews data
const reviews = [
  {
    id: 1,
    name: "Paquito Chocolatero",
    job: "Torero",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//Traer las referncias de los elementos del DOM que vamos a manejar desde el script
//Botones
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Elemtos gráficos
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//Necesitamos saber el la review que se está mostrando
let currentReview = 0;
showReview(currentReview);

//Crear una funcion que muestre la review
function showReview(reviewIndex) {
  //Rellenamos los elementos con los datos de la review
  //del indice que pasemos como parametro
  const item = reviews[reviewIndex]
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
  img.src = item.img;
}
//Eventos para la interacción del usuario
//Mostrar la review siguiente
nextBtn.addEventListener('click', function(){
  if(currentReview < reviews.length -1){
    currentReview++;
  }
  showReview(currentReview)
  console.log(currentReview)
})
prevBtn.addEventListener('click', function(){
  if(currentReview > 0){
    currentReview--;
  }
  showReview(currentReview)
})
randomBtn.addEventListener('click', function(){
  currentReview = generarNumeroAleatorio(reviews.length);
  showReview(currentReview)
})

//funcion que devuelve un numero aleatorio 
//dentro de un rango
function generarNumeroAleatorio(rango){
  return Math.floor(Math.random() * rango) 
}