var botones = document.querySelectorAll(".content__products__element__info__img__btn");
var bolsita = document.querySelector(".carrito__num__cart");

function moverBolsita(){

    var tl =new TimelineLite();
    var hijo =bolsita;
    
    
    tl.to(hijo,0.1, {width:27, height:32})
    .to(hijo,0.2, {width:37, height:40})
    .to(hijo,0.1, {width:27, height:32})
    .to(hijo,0.1, {width:32, height:35})
    .to(hijo,0.1, {width:27, height:32})
    
    tl.play();
}

botones.forEach(boton=>{
boton.addEventListener('click',moverBolsita);
});

var welome = document.querySelector (".welcome");
var japan = document.querySelector(".japan");

function animacionComplex(){
    var t1 = new TimelineLite();
    var first = welome;
    t1.to(first, 0.1, {width:111,height:1200, opacity:100, delay: 4})

    t1.play();
}
window.addEventListener('load',animacionComplex);

console.log("hi");