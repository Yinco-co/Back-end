const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const docenteController = require('../controllers/docente');
// 3.
// router.post('/tea', teaController.newTea);

// router.delete('/tea', teaController.deleteAllTea);

// router.get('/docente', teaController.getAllDocente);
router.get('/docente', docenteController.getOneDocente);

// router.delete('/tea/:name', teaController.deleteOneTea);

// 4.
module.exports = router; // export to use in server.js