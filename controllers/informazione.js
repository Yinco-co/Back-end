const info = require('../models/informazione');

const getOneInfo = (req, res) => {
    let tahs = req.params.tags; //prende le tag dell'info
    console.log(tags);

    //trova il docente con quel cognome
   info.findOne({ tags: tags }, (err, tags) => {
        if (err || !tags) {
            console.log(err);
            return res.json({ message: "info non trovata" });
        }
        else return res.json(tags); //ritorna il docente trovato
    }); 
}; 
module.exports = {
    getOneInfo,
};
