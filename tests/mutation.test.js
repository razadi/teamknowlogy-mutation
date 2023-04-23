const { validaArray } = require('../helpers/matrix');
const mutation = require('../helpers/mutation');
const { arrayNxN, yesMutation, oneMutation } = require('./helper');
const hasMutation = mutation.hasMutation;



describe('Revisar funciones de mutation', () => {

  test('Validar que se agregue un array de NxN', () => {
    expect(validaArray(arrayNxN)).toBe(undefined);
  });

  test('Validar un caso verdadero', () => {
    expect(hasMutation(yesMutation)).toBe(true);
  });

  test('Validar que revise si existe más de una coincidencia', () => {
    expect(hasMutation(oneMutation)).toBe(false);
  });

});
