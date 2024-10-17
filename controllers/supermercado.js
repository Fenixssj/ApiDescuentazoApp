require('dotenv').config();
const express = require('express');
const connection = require('../config/config');
const app = express();

// URL: http://localhost:5500/api/supermercado/todos

module.exports.buscar_todo = app.get('/todos', (request, response) => {  
    const sql = `
            SELECT
                id_supermercado,
                nombre_supermercado
            FROM supermercado
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