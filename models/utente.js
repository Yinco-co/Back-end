const mongoose = require("mongoose");

const UtenteSchema = new mongoose.Schema({
    mail: {type:String, required:true},
    lingua:Boolean,
    notifiche:Boolean
});

const Utente = mongoose.model('Utente', UtenteSchema);
module.exports = Utente;