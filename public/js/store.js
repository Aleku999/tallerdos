var productos = [];
var rango = document.querySelector('.input-rango');

function buscarPrecio(){
    location.href="/store?price=" + rango.value;
}
if(rango != null){
    rango.addEventListener('change',buscarPrecio);
}

if(localStorage.getItem('productos') != null){
    productos = JSON.parse(localStorage.getItem('productos'));
}

var botones = document.querySelectorAll('.content__products__element__info__img__btn');

botones.forEach(botonProducto => {
    botonProducto.addEventListener('click', function(event){
        event.preventDefault;
        
        let tem__padre = this.parentNode;
        var padre= tem__padre.parentNode;
        tem__padre = padre;
        padre= tem__padre.parentNode;
        tem__padre = padre;
        padre= tem__padre.parentNode;
        console.log(padre);
        var name = padre.querySelector('.content__products__element__info__descrip__name').innerText;
        var price = padre.querySelector('.content__products__element__info__descrip__price').innerText;
        var imagen = padre.querySelector('.content__products__element__img').src;
        
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
        
        var name = document.querySelector('.producto__titulo').innerText;
        var price = document.querySelector('.realPrice').innerHTML;
        var imagen = document.querySelector('.product__images__principal__first').src;
        
        var producto = {
            name: name,
            price: price,
            imagen: imagen
        };
        productos.push(producto);
        agregarCarrito();
        localStorage.setItem('productos',JSON.stringify(productos));
    });
});

var carritoNum = document.querySelector('.carrito__num');

var listaCarrito = document.querySelector('.cart-desplegado__lista');



function agregarCarrito(){

    var precioTotal = 0;

    if(carritoNum != null){
        console.log(productos.length);
        carritoNum.innerHTML = productos.length;
    }

    if(listaCarrito != null){
        listaCarrito.innerHTML = '';
        productos.forEach(function(producto,index){

            precioTotal += parseInt(producto.price);

            listaCarrito.innerHTML += `
            <div class"productosF">
            <img class="productosF_imagen" src=${producto.imagen} width="250px" alt=''>
            </div>`
        });

        document.querySelector('#precioTotal').innerText = precioTotal;
    }    

  
}

agregarCarrito();
