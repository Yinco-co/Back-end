const express = require('express'); //import express
const informazione = require('../models/informazione')
const router = express.Router();
const infoController = require('../controllers/informazione');

router.get('/?', infoController.getOneInfo);
router.get('/', async (req, res) =>{
    let books = await informazione.find({});
    books = books.map( (informazione) =>{
        return {
            self: informazione.title,
            year: informazione.year,
            body: informazione.body,
            tags: informazione.tags
        };
        });
        res.status(200).json(books);
    });

module.exports = router; // export to use in server.js