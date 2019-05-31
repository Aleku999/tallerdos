const express= require('express');
const hbs = require ('express-handlebars');
const app = express();

//instalar Mongo
var MongoClient =require('mongodb').MongoClient;
var assert = require('assert');

//Conection URL
const url= 'mongodb://localhost:27017';
const dbName = 'tienda';

//Create Clietn Object
const client = new MongoClient(url, { useNewUrlParser: true});
var db = null;

MongoClient.connect(`mongodb+srv://cluster0-rfkyi.mongodb.net/tienda`, {
    auth:{
        user:'aj-taller',
        password:'ContraseñaSuperSegura123'
    }
},
function(err,client){
    if(err) throw err;
    db = client.db('tienda');
    app.listen(process.env.PORT ||500);
}
);
/*
//connect 
client.connect(function(err){
    assert.equal(null,err);
    console.log("Estamos conectados");
    

//Conect to database
db =client.db(dbName);

//client.close();

});
*/
//Definir carpeta publica

app.use(express.static('public'));

app.engine('handlebars',hbs());

app.set('view engine','handlebars');

app.use(express.urlencoded({extended:true}));

app.get('/', function(request,response){
    response.render('home');
});

// cart
app.get('/cart',function(request,response){
    response.render('cart');
});
// cart
app.get('/collection',function(request,response){
    response.render('collection');
});
// interacccion
app.get('/break',function(request,response){
    response.render('interaction');
});
//Por categoria
app.get('/store/:category?', function(request,response){
    
    var productos= db.collection('productos');
    var query= {};

    if(request.query.price){
        query.price = {$lt: parseInt(request.query.price)};
    }
    if(request.query.gender){
        query.gender = request.query.gender;
    }
    if(request.params.category){
        query.category = request.params.category;
    }
    productos.find(query).toArray(function(err,docs){
     assert.equal(null,err);
    console.log(request.query);
     var contexto ={
         productos: docs,
         price:request.query.price
     };
     response.render('store',contexto);

    });
});

app.get('/product/:name', function(req,res){
    var productos= db.collection('productos');
    productos.find({name: req.params.name}).toArray(function(err,docs){
        assert.equal(null,err)
        var contexto = docs[0];
        res.render('product',contexto);
    });
    console.log(req.params.product);
    
     
    
  });
  app.post('/pago', function(request, response){
    // crear un archivo con la información del usuario
    console.log(request.body);

    var pedido = {
        name: request.body.name,
        document: request.body.document,
        address: request.body.address,
        email: request.body.email,
        
        productos: JSON.parse(request.body.productos),
        fecha: new Date(),
        estado: 'nuevo'
    };

    var collection = db.collection('pedidos');
    collection.insertOne(pedido, function(err){
        assert.equal(err, null);

        console.log('pedido guardado');
    });
    response.redirect('/');
});


/*app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });*/