const mongoose=require('mongoose');

const InfoSchema = new mongoose.Schema({
    title: {type:String, required:true},
    year: {type:Number, required:true},
    body: {type:String, required:true},
    tags: {type:String, required:true},
    privilege_level: {type:Number, required:true}
});

const Informazione = mongoose.model('informazione', InfoSchema, "Informazioni");
module.exports= Informazione;
