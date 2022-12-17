const informazione = require('../models/informazione');

const getOneInfo = async (req, res) => {
    let tags = req.query.tags; //prende le tag dell'info
    console.log(tags);
    let information = await informazione.findOne({tags: {$regex:req.query.tags}}, {title:1, year:1, body:1, tags:1}, (err, data) => {
        if (err || !data){
            return res.status(404).json("L'informazione non è presente");
        }
        else {
            return res.status(200).json(data);
         }
    }).clone().catch(function(err){console.log(err)});
}; 
module.exports = {
    getOneInfo,
};
