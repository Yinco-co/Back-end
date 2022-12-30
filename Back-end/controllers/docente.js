const docente = require('../models/docente');

const getOneDocente = async(req, res) => {
    let surname = req.query.cognome;
    console.log(surname);
    let cognome = await docente.findOne({ cognome: req.query.cognome }, {url: 1}, (err, data) => {
        if (err || !data){
            return res.status(404).json("Il docente non è presente");
        }
        else {
            return res.status(200).json(data);
         }
    }).clone().catch(function(err){console.log(err)}); 
};
module.exports = {
    getOneDocente,
};
