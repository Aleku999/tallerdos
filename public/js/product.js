function paginaCargada(){
    var principal = document.getElementById('principal');
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    var cambio = document.getElementById('cambio');

    function modFirst(){
        var nuevaImg=this.getAttribute("src");
        //console.log(this.getAttribute("src"));
        principal.setAttribute("src", nuevaImg);
        console.log('principal');
    }
    function modSecond(){
        var nuevaImg=this.getAttribute("src");
        //console.log(this.getAttribute("src"));
        principal.setAttribute("src", nuevaImg);
        console.log('principal');
    }
    function modThird(){
        var nuevaImg=this.getAttribute("src");
        //console.log(this.getAttribute("src"));
        principal.setAttribute("src", nuevaImg);
        console.log('principal');
    }

    first.addEventListener('click',modFirst);
    second.addEventListener('click',modSecond);
    third.addEventListener('click',modThird);
}
window.addEventListener('load',paginaCargada);