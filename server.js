const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/docente');
const path = require('path');
app.use(express.json());

app.use('/', routes)


mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
      if (err) return console.log("Error: ", err);
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'FrontEndYinco')));

// Serve the chatbot.html file when the root URL is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEndYinco', 'chatbot.html')); // Use path.join to generate the file path
});