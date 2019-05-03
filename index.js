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
//connect 
client.connect(function(err){
assert.equal(null,err);
console.log("Estamos conectados");

//Conect to database
const db=client.db(dbName);

const productos= db.collection('productos');
productos.find({}, {sort:['price']}).toArray(function(err,docs){
 assert.equal(null,err);
 console.log("encontramos atlantis");
 console.log(docs.length);

 docs.forEach(function(prod){
     console.log(prod.price);
 })
});

client.close();

});

//Definir carpeta publica

app.use(express.static('public'));

app.engine('handlebars',hbs());

app.set('view engine','handlebars');

app.get('/', function(request,response){
    response.render('home');
});
app.get('/store', function(request,response){
    response.render('store');
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });