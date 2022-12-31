const docenti = ["Ranise", "Passerone", "Giorgini", "Tomasi", "Bucchiarone", "Casari", "Bouquet", "Velha", "Montresor", "Iacca"];
const info = ["tasse", "rate", "contributi", "esoneri", "borsa di studio", "opera universitaria", "invalidità", "alloggio", "casa", "libera circolazione", "trasporti", "bus", "treni", "taxes", "fees", "contributions", "tuition fees", "exemptions", "scholarship", "disability", "housing", "home", "free circulation", "transportation", "buses", "trains" ];

function filter(msgText, array) {
    if (docenti.some(docente => msgText.includes(docente))) {
    return 1;
    } else if (info.some(info => msgText.includes(info))) {
    return 2;
    } else {
    return 0;
    }
    }

  module.exports= filter;