

//DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
});*/

//Obtener los elementos de la clase .close
let claseclose = document.querySelectorAll(".close");
//Recorrerlos
claseclose.forEach(function(close){
    //Agregar un evento click a cada uno de ellos
    close.addEventListener("click", function(evento){
        evento.preventDefault();

        setTimeout(function(){
            location.href = "boletines";
        },600);
        //setInterval

        return false;
    })
});

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("")
});*/

