const { getOneDocente } = require('../controllers/docente');
const controller = require('./controllers/docente');

describe('test-coverage per le funzioni del controller docente', () =>{
test('See if the functions works as intended', () => {
    expect(getOneDocente('Passerone')).toBe('https://webapps.unitn.it/du/it/Persona/PER0000817/Curriculum');
})
});