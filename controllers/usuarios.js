require('dotenv').config();
const express = require('express');
const connection = require('../config/config');
const app = express();

//5 URL : http://localhost:5500/api/usuarios/todos

module.exports.buscar_todo = app.get('/todos', (request, response) => {  
    const sql = `
            SELECT
                id_usuario,
                nombre,
                apellido,
                correo,
                contraseña
            FROM usuarios
        `;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            response.status(200).send(results);
        } else {
            response.status(204).send('Sin resultado');
        }
    });               
});