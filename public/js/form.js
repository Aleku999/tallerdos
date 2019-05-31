window.addEventListener('load', function(){
    var form = document.querySelector('form');
    var  order = document.querySelector('order');
    function enviarProductos(evento){
        //evento.preventDefault();
        console.log('hola');

        var input = document.querySelector('.input-productos');
        input.value = localStorage.getItem('productos');

        localStorage.removeItem('productos');
    }
    form.addEventListener('submit', enviarProductos);

});