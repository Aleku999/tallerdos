const express= require('express');
const hbs = require ('express-handlebars');
//instalar Mongo
var MongoClient =require('mongodb').MongoClient;
var assert = require('assert');
const app = express();

//Conection URL
const url= 'mongodb://localhost:27017';
const dbName = 'skere';

//Create Clietn Object
const client = new MongoClient(url);

var db = null;

//connect 
client.connect(function(err){
    assert.equal(null,err);
    console.log("Estamos conectados");
    

//Conect to database
db =client.db(dbName);

//client.close();

});

//Definir carpeta publica

app.use(express.static('public'));

app.engine('handlebars',hbs());

app.set('view engine','handlebars');

app.get('/', function(request,response){
    response.render('home');
});

// cart
app.get('/cart'),function(request,response){
    response.render('cart');
}
//Por categoria
app.get('/store/:category?', function(request,response){
    
    var productos= db.collection('productos');
    var query= {};
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
         productos: docs
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

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });