const request = require('supertest');
const app = require('../app');


describe('Test dell\'API Informazione in italiano', () => {
  test('Deve restituire l\'informazione riferita al tag dato', async () => {
    const res = await request(app).get("/damn/?tags=libera circolazione");
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Libera Circolazione: abbonamento per trasporto urbano ed extraurbano');
  }, 20000);

    test('Deve restituire un errore se il tag non è stato scritto bene', async () => {
      const res = await request(app).get("/damn/?tags=libea circolazione");
      expect(res.statusCode).toEqual(404);
    }, 20000);

    test('Deve restituire l\'informazione riferita al tag incompleto dato', async () => {
        const res = await request(app).get("/damn/?tags=libera");
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Libera Circolazione: abbonamento per trasporto urbano ed extraurbano');
    }, 20000);

    test('Deve restituire l\'informazione riferita ai tag dati. Vanno nello stesso ordine di MongoDB', async () => {
        const res = await request(app).get("/damn/?tags=trasporti, bus");
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Libera Circolazione: abbonamento per trasporto urbano ed extraurbano');
    }, 20000);

    test('Deve restituire un errore se i tag inseriti sono in ordine diverso rispetto a MongoDB', async () => {
        const res = await request(app).get("/damn/?tags=bus, trasporti");
        expect(res.statusCode).toEqual(404);
    }, 20000);

  test('Deve restituire un errore se il tag non si riferisce a nessuna informazione', async () => {
    const res = await request(app).get("/damn/?tags=ciao");
    expect(res.statusCode).toEqual(404);
  }, 20000);
}); 


describe('Test dell\'API Informazione in inglese', () => {
  test('Deve restituire l\'informazione riferita al tag dato', async () => {
    const res = await request(app).get("/damn/?tags=free circulation");
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Free circulation pass for in-town and out-of-town public transport');
  }, 20000);

    test('Deve restituire un errore se il tag non è stato scritto bene', async () => {
      const res = await request(app).get("/damn/?tags=fre circulatin");
      expect(res.statusCode).toEqual(404);
    }, 20000);

    test('Deve restituire l\'informazione riferita al tag incompleto dato', async () => {
        const res = await request(app).get("/damn/?tags=free");
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Free circulation pass for in-town and out-of-town public transport');
    }, 20000);

    test('Deve restituire l\'informazione riferita ai tag dati. Vanno nello stesso ordine di MongoDB', async () => {
        const res = await request(app).get("/damn/?tags=transportation, buses");
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Free circulation pass for in-town and out-of-town public transport');
    }, 20000);

    test('Deve restituire un errore se i tag inseriti sono in ordine diverso rispetto a MongoDB', async () => {
        const res = await request(app).get("/damn/?tags=buses, transportation");
        expect(res.statusCode).toEqual(404);
    }, 20000);
}); 