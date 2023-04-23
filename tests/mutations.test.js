const supertest = require('supertest');
const {app, server} = require('../app');
const { yesMutation, oneMutation } = require('./helper');

const api = supertest(app);

test('Validar que el endpoint regrese 200 cunado se manda una dna correcta', async () => {
  await api.post('/mutation')
  .send({
    dna: yesMutation
  })
  .expect(200)
  .expect('Content-type', /application\/json/);
});

test('Validar que el endpoint regrese 403 cunado se manda una dna incorrecta', async () => {
  await api.post('/mutation')
  .send({
    dna: oneMutation
  })
  .expect(403)
  .expect('Content-type', /application\/json/);
});

test('Validar que el endpoint stats calcule el ratio correctamente', async () => {
  const response = await api.get('/mutation/stats');
  const count_mutations = response.body.count_mutations;
  const count_no_mutation = response.body.count_no_mutation;
  const ratio = count_mutations / count_no_mutation;

  expect(response.body.ratio).toBe(ratio);
});