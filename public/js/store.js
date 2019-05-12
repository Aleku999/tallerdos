var productos = [];
if(localStorage.getItem('productos') != null){
    productos = JSON.parse(localStorage.getItem('productos'));
}


var botones = document.querySelectorAll('.content__products__element__info__img__btn');

botones.forEach(botonProducto => {
botonProducto.addEventListener('click',function(event){
    event.preventDefault;

        var padre= this.parentNode;
        var name = padre.querySelector('.content__products__element__info__descrip__name');
        var price = padre.querySelector('.content__products__element__info__descrip__price');
        var imagen = padre.querySelector('.content__products__element__img');
        
        var producto = {
            name : name,
            price : price,
            imagen : imagen
        };
        productos.push(producto);
        agregarCarrito();
            localStorage.setItem('productos', JSON.stringify(productos));
    });
    });        

    var botonesAgregarProducto = document.querySelectorAll('.producto__comprar');
    botonesAgregarProducto.forEach(botonProducto=> {
        botonProducto.addEventListener('click',function(event){
            event.preventDefault;

            var padre= this.parentNode;
            var name = padre.querySelector('.content__products__element__info__descrip__name');
            var price = padre.querySelector('.content__products__element__info__descrip__price');
            var imagen = padre.querySelector('.content__products__element__img');
            
            var producto = {
                name : name,
                price : price,
                imagen : imagen
            };
            productos.push(producto);
            agregarCarrito();
            localStorage.setItem('productos',JSON.stringify(productos));
        });
    });
   
var carritoNum = document.querySelector('.carrito__num');
function agregarCarrito(){   console.log(productos.length);
    carritoNum.innerHTML = productos.lenght;
}
