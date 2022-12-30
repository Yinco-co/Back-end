const msgerForm = get(".msger-inputarea");
const msgerInput = document.getElementById("testo");
const msgerChat = get(".messaggi");

const docenti = ["Ranise", "Passerone", "Giorgini", "Tomasi", "Bucchiarone", "Casari", "Bouquet", "Velha", "Montresor", "Iacca"];
const info = ["tasse", "rate", "contributi", "esoneri", "borsa di studio", "opera universitaria", "invalidità", "alloggio", "casa", "libera circolazione", "trasporti", "bus", "treni", "taxes", "fees", "contributions", "tuition fees", "exemptions", "scholarship", "disability", "housing", "home", "free circulation", "transportation", "buses", "trains" ];
const BOT_IMG = "Img/Logo.png";
const BOT_NAME = "YINCO";
const PERSON_NAME = "Studente";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessageUser(PERSON_NAME, "right", msgText);

  const filterDocenti = filter(msgText, docenti);
  const filterInfo = filter(msgText, info);

  if (filterDocenti == 1) {
    botResponseDocente();
  } else if (filterInfo == 2) {
    botResponseInfo();
  } else {
    appendMessageBotErrore(BOT_NAME, BOT_IMG, "left");
  }
});

function appendMessageUser(name, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function appendMessageBotDocente(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>

        <div class="msg-text">
          <p>Le informazioni riguardanti il seguente docente possono essere trovate qui:</p>
          <a href="${text}" target=blank>LINK</a>
          </div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function appendMessageBotInfo(name, img, side, title, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>

        <div class="msg-text">
        <h5>${title}</h5>
        <p>${text}</p>
        </div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function appendMessageBotErrore(name, img, side) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>

        <div class="msg-text">
          <p>Le informazioni cercate non sono disponibili. Sei sicuro di aver scritto bene la domanda???</p>
        </div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponseDocente() {
  const msgText = msgerInput.value;
  
  // estrai il cognome del docente che l'utente sta cercando dal messaggio, ignorando la distinzione tra maiuscole e minuscole
  const cognome = msgText.match(new RegExp(docenti.join("|"), 'gi'))[0];
  
  // rendi il primo carattere del cognome maiuscolo
  const cognomeCorretto = cognome.charAt(0).toUpperCase() + cognome.slice(1);
  
  const delay = msgText.split(" ").length * 100;
  
  setTimeout(() => {
    fetch('../docente/?cognome=' + cognomeCorretto)
      .then(res => res.json())
      .then (function(data) {
        appendMessageBotDocente(BOT_NAME, BOT_IMG, "left", data.url);
      })
      .catch(error => console.error(error));
  }, delay);
}

function botResponseInfo() {
  const msgText = msgerInput.value;
  
  // estrai il termine che l'utente sta cercando dal messaggio
  const termine = msgText.match(new RegExp(info.join("|"), 'gi'))[0];
  
  const delay = msgText.split(" ").length * 100;
  
  setTimeout(() => {
    fetch('../damn/?tags=' + termine.toLowerCase())
      .then(res => res.json())
      .then (function(data) {
        if(data.body != undefined) {
          appendMessageBotInfo(BOT_NAME, BOT_IMG, "left", data.title, data.body);
        } else {
          appendMessageBotErrore(BOT_NAME, BOT_IMG, "left");
        }
      })
      .catch(error => console.error(error));
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

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