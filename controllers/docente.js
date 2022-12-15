const docente = require('../models/docente');

const getOneDocente = (req, res) => {
    let cognome = req.params.cognome; //prende il cognome del docente
    console.log(cognome);

    //trova il docente con quel cognome
   docente.findOne({ cognome: cognome }, (err, docente) => {
        if (err || !docente) {
            console.log(err);
            return res.json({ message: "Il docente non esiste." });
        }
        else return res.json(docente); //ritorna il docente trovato
    }); 
}; 
module.exports = {
    getOneDocente,
};
