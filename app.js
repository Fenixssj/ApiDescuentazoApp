require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.port || 5500;

// configuración body parser para permitir json, y url encoded
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require('./config/config.js');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Se inicia servidor
app.listen(port, function (){
    console.log('Servidor esta corriendo! http://localhost:5500/api/test/');
    controladores();
});

// Test de la api donde llama el "inicia servidor"
app.get("/api/test/",function(request,response){
	response.send("Bienvenido a API DescuentazoApp");
});

const usuarios = require('./controllers/usuarios');
const comuna = require('./controllers/comuna');
const supermercado = require('./controllers/supermercado');
const tipo_producto = require('./controllers/tipo_producto');
const marca = require('./controllers/marca');
const producto = require('./controllers/producto');  // En proseso...

function controladores() {
    // Rutas 
    app.use('/api/usuarios/', usuarios.buscar_todo);
    app.use('/api/comuna/', comuna.buscar_todo);
    app.use('/api/supermercado/', supermercado.buscar_todo);
    app.use('/api/tipo_producto/', tipo_producto.buscar_todo);
    app.use('/api/marca/', marca.buscar_todo);
    app.use('/api/producto/', producto.buscar_todo);  //  En proseso...
}