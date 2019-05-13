function paginaCargada(){
    var principal = document.getElementById('contenedor');
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var cambio = document.getElementById('cambio');

    function modFirst(){
        principal.innerHTML= '<img id="principal" src="{{imagen.[0]}}" width="500px">';
        console.log('principal');
    }
    function modSecond(){
        principal.innerHTML= '<img id="principal" src="('+cambio.value+')" width="500px">';
        console.log(principal);
    }
    function modThird(){
        principal.innerHTML= '<img id="principal" src="{{imagen.[2]}}" width="500px">';
    }

    first.addEventListener('click',modFirst);
    second.addEventListener('click',modSecond);
    third.addEventListener('click',modThird);
}
window.addEventListener('load',paginaCargada);