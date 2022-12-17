const mongoose=require('mongoose');

const docenteSchema = new mongoose.Schema({
    cognome: {type:String, required:true},
    url: {type:String, required:true}
});

const Docente = mongoose.model('docente', docenteSchema, "Docenti");
module.exports= Docente;


