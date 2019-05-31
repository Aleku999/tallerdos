var line = document.querySelector(".aplication__text__img");
var mmix =document.querySelector(".aplication__text__mix");
var complete = document.querySelector(".complete");
var camisa= document.querySelector("#camisas");
var pantalon=document.querySelector("#pantalones");
var zapato=document.querySelector("#zapatos");
var botones = document.querySelector(".botones");
var principal =document.querySelector(".principal");
var ready = document.querySelector(".ready");

TweenMax.from(line, 1, {opacity:0.3, x:-200});
TweenMax.from(mmix, 1, {opacity:0.3, x:-200, delay: 1});
TweenMax.from(principal, 1, {opacity:0.3, y:-100});
TweenMax.from(complete, 1, {opacity:0.3, y:1000, delay: 1});
TweenMax.from(camisa, 1, {opacity:0.3, x:1000, delay: 1});
TweenMax.from(pantalon, 1.2, {opacity:0.3, x:1000, delay: 1});
TweenMax.from(zapato, 1.4, {opacity:0.3, x:1000, delay: 1});
TweenMax.from(botones, 1, {opacity:0.3, y:700, delay: 1});

function moverBolsita(){

    TweenMax.to(line, 1, {opacity:0, x:-200});
TweenMax.to(mmix, 1, {opacity:0.3, x:-200, });
TweenMax.to(complete, 1, {y:-50, x:100});
TweenMax.to(camisa, 1, {opacity:0.3, x:1000, });
TweenMax.to(pantalon, 1.2, {opacity:0.3, x:1000, });
TweenMax.to(zapato, 1.4, {opacity:0.3, x:1000, });
TweenMax.to(botones, 1, {opacity:0.3, y:700, });
}

ready.addEventListener('click',moverBolsita);
