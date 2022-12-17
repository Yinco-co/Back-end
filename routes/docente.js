const express = require('express'); //import express
const docente = require('../models/docente.js')
const router = express.Router();
const docenteController = require('../controllers/docente');

router.get('/?', docenteController.getOneDocente);

/*router.get('/', async (req, res) =>{
    let books = await docente.find({});
    books = books.map( (docente) =>{
        return {
            self: docente.cognome,
            link: docente.url
        };
        });
        res.status(200).json(books);
    });
*/
module.exports = router; // export to use in server.js