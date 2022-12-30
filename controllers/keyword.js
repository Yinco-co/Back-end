const docenti = ["Ranise", "Passerone", "Giorgini", "Tomasi", "Bucchiarone", "Casari", "Bouquet", "Velha", "Montresor", "Iacca"];
const info = ["tasse", "rate", "contributi", "esoneri", "borsa di studio", "opera universitaria", "invalidità", "alloggio", "casa", "libera circolazione", "trasporti", "bus", "treni"]
const msgText = 'info su bus';

function filter(msgText, array) {
  for (let i = 0; i < array.length; i++) {
    if (RegExp(array[i], 'gi').test(msgText)) {
      if (array === docenti) {
        return 1;
      } else if (array === info) {
        return 2;
      }
    }
  }
  
  return 0;
}

const filterDocenti = filter(msgText, docenti);
const filterInfo = filter(msgText, info);

  if (filterDocenti == 1) {
    console.log('true');
  } else if (filterInfo == 2) {
    console.log('false');
  } else {
    console.log('error');
    }

