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

var generoSelected = true;
var camisa1 = document.querySelector("#camisa1");

var camisa2 = document.querySelector("#camisa2");
var camisa3 = document.querySelector("#camisa3");

var pantalon1 = document.querySelector("#pantalon1");
var pantalon2 = document.querySelector("#pantalon2");
var pantalon3 = document.querySelector("#pantalon3");

var zapatos1 = document.querySelector("#zapatos1");
var zapatos2 = document.querySelector("#zapatos2");
var zapatos3 = document.querySelector("#zapatos3");

cambiarSelector();


function cambiarSelector(){
    if (generoSelected) {
        console.log("masc");
        
        camisa1.style.backgroundImage = "url('/interaccion/hombre/camisaH1.png')";
        camisa2.style.backgroundImage = "url('/interaccion/hombre/camisaH2.png')";
        camisa3.style.backgroundImage = "url('/interaccion/hombre/camisaH3.png')";
       
        pantalon1.style.backgroundImage = "url('/interaccion/hombre/pantalonH1.png')";
        pantalon2.style.backgroundImage = "url('/interaccion/hombre/pantalonH2.png')";
        pantalon3.style.backgroundImage = "url('/interaccion/hombre/pantalonH3.png')";

        zapatos1.style.backgroundImage = "url('/interaccion/hombre/zapatoH1.png')";
        zapatos2.style.backgroundImage = "url('/interaccion/hombre/zapatoH2.png')";
        zapatos3.style.backgroundImage = "url('/interaccion/hombre/zapatoH3.png')";
    } else {
        console.log("fem");
        camisa1.style.backgroundImage = "url('/interaccion/mujer/camisaM1.png')";
        camisa2.style.backgroundImage = "url('/interaccion/mujer/camisaM2.png')";
        camisa3.style.backgroundImage = "url('/interaccion/mujer/camisaM3.png')";
       
        pantalon1.style.backgroundImage = "url('/interaccion/mujer/pantalonM1.png')";
        pantalon2.style.backgroundImage = "url('/interaccion/mujer/pantalonM2.png')";
        pantalon3.style.backgroundImage = "url('/interaccion/mujer/pantalonM3.png')";

        zapatos1.style.backgroundImage = "url('/interaccion/mujer/zapatoM1.png')";
        zapatos2.style.backgroundImage = "url('/interaccion/mujer/zapatoM2.png')";
        zapatos3.style.backgroundImage = "url('/interaccion/mujer/zapatoM3.png')";
    }
}
var cambiar = document.querySelector(".change");

cambiar.addEventListener('click', ()=> {
    generoSelected = !generoSelected;
    cambiarSelector()
});