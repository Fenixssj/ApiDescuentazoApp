const mysql = require('mysql');

var connection;

connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'descuentazoapp',
    port: 3306
});

connection.connect(function(err) {
    if (err) console.log(err);
});
    
module.exports = connection;  

// **************************************************************************************************************************************
//  pasos para la base de datos : Api descuentazo app.
// **************************************************************************************************************************************
//  El primer paso debemos dejar en el terminal con este codigo: node app.js  
//  Segundo, luego le da un URL que es : http://localhost:5500/api/test/
//  Trercero, para ver la base de datos debes dejar asi , EJ: /api/usuarios/todos , /api/favorito/todos y etc, asi va directo a los URL.
// *************************************************************************************************************************************