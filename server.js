const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/utente');
const path = require('path');
app.use(express.json());

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})




// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'FrontEndYinco')));

// Serve the chatbot.html file when the root URL is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEndYinco', 'chatbot.html')); // Use path.join to generate the file path
});