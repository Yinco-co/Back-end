const docenti = ["ranise", "passerone", "giorgini", "tomasi", "bucchiarone", "casari", "bouquet", "velha", "montresor", "iacca"];
const info = ["tasse", "rate", "contributi", "esoneri", "borsa di studio", "opera universitaria", "invalidità", "alloggio", "casa", "libera circolazione", "trasporti", "bus", "treni", "taxes", "fees", "contributions", "tuition fees", "exemptions", "scholarship", "disability", "housing", "home", "free circulation", "transportation", "buses", "trains" ];

function filter(msgText, array) {
  if (docenti.some(docente => msgText.toLowerCase().includes(docente.toLowerCase()))) {
    return 1;
  } else if (info.some(info => msgText.toLowerCase().includes(info.toLowerCase()))) {
    return 2;
  } else {
    return 0;
  }
}


  module.exports= filter;