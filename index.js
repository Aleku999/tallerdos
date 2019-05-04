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
app.get('/store', function(request,response){
    
    var productos= db.collection('productos');

    productos.find({}).toArray(function(err,docs){
     assert.equal(null,err);
    // console.log("encontramos atlantis");
     var contexto ={
         productos: docs
     };
     response.render('store',contexto);

    });
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });