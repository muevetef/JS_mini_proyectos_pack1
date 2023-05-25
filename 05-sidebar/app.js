//Traer las referencias del HTML
const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn  = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

//añadir los eventos a los botones
toggleBtn.addEventListener('click', function(){
    //añadimos y quitamos la clase .show-sidebar
    sidebar.classList.toggle("show-sidebar")
})
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove("show-sidebar")
})
