console.log("controller");
const newUtente = (req, res, next) => {
    console.log("eccomi");
    return res.json({ message: "Post new utente" });
};

module.exports = { newUtente };