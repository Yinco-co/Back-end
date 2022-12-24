require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes/docente.js')//(app, {});
const path = require('path');
const multer = require ('multer');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(multer().none());
app.use(express.urlencoded({extended:false}));

app.use('/docente', require('./routes/docente'));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/damn', require('./routes/informazione'));

module.exports = app;