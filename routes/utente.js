const express = require('express');

const router = express.Router();

const utenteController = require('../controllers/utente')

router.post('/utente', utenteController.newUtente)

module.exports = router; 