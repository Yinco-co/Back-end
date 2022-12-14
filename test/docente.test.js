const request = require('supertest');
const app = require('../app');


describe('Test dell\'API Docente', () => {
  test('Deve restituire il docente con il cognome specificato', async () => {
    const res = await request(app).get("/docente/?cognome=Bucchiarone");
    expect(res.statusCode).toEqual(200);
    expect(res.body.url).toEqual('https://webapps.unitn.it/du/it/Persona/PER0053043/Didattica');
  }, 20000);

  test('Deve restituire un errore se il docente non esiste', async () => {
    const res = await request(app).get("/docente?cognome=Bianchi");
    expect(res.statusCode).toEqual(404);
  }, 20000);
}); 