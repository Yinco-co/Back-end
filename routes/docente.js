const express = require('express'); //import express
const docente = require('../models/docente.js')
const router = express.Router();
const docenteController = require('../controllers/docente');

router.get('/?', docenteController.getOneDocente);

module.exports = router; // export to use in server.js