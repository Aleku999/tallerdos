const express= require('express');
const hbs = require ('express-handlebars');
const app = express();

//Definir carpeta publica

app.use(express.static('public'));

app.engine('handlebars',hbs());

app.set('view engine','handlebars');

app.get('/', function(request,response){
    response.render('home');
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
  });