const express = require('express'); //import express
const informazione = require('../models/informazione')
const router = express.Router();
const infoController = require('../controllers/informazione');

router.get('/?', infoController.getOneInfo);

module.exports = router; // export to use in server.js