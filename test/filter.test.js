const filter = require('../controllers/filter');

const docenti = ["ranise", "passerone", "giorgini", "tomasi", "bucchiarone", "casari", "bouquet", "velha", "montresor", "iacca"];
const info = ["tasse", "rate", "contributi", "esoneri", "borsa di studio", "opera universitaria", "invalidità", "alloggio", "casa", "libera circolazione", "trasporti", "bus", "treni", "taxes", "fees", "contributions", "tuition fees", "exemptions", "scholarship", "disability", "housing", "home", "free circulation", "transportation", "buses", "trains" ];

describe('La funzione filter', () => {
  test('restituisce 1 quando il messaggio contiene una parola presente nell\'array docenti', () => {
    const msgText = "Fornisci informazioni sul prof Bucchiarone";
    expect(filter(msgText, docenti)).toEqual(1);
  });

  test('restituisce 2 quando il messaggio contiene una parola presente nell\'array info', () => {
    const msgText = "Dammi informazioni sulle tasse";
    expect(filter(msgText, info)).toEqual(2);
  });
  

  test('restituisce 0 quando il messaggio non contiene parole presenti negli array docenti o info', () => {
    const msgText = "Ciao, come va?";
    expect(filter(msgText, docenti)).toEqual(0);
    expect(filter(msgText, info)).toEqual(0);
  });
});
