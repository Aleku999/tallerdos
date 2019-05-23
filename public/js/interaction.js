var botones = document.querySelectorAll(".content__products__element__info__img__btn");
var bolsita = document.querySelector(".carrito__num__cart");

function moverBolsita(){

    var tl =new TimelineLite();
    var hijo =bolsita;
    
    
    tl.to(hijo,0.5, {x:50, y:0})
    .to(hijo,0.5, {x:50, y:50})
    .to(hijo,0.5, {x:-50, y:-50})
    .to(hijo,0.5, {x:-50, y:0})
    
    tl.play();
}

botones.forEach(boton=>{
boton.addEventListener('click',moverBolsita);
});


console.log("hi");