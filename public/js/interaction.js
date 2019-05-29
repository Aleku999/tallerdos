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


console.log("hi");