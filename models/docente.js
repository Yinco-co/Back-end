const mongoose=require('mongoose');

const docenteSchema = new mongoose.Schema({
    cognome: {type:String, required:true},
    url: String
});

const Docente = mongoose.model('docente', docenteSchema);
module.exports=Docente;


