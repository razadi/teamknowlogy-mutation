const { Router } = require('express');
const { check } = require('express-validator');
const { isMutant, statsMutations } = require('../controllers/mutations.controller');
const { validaArray } = require('../helpers/matrix');

const router = Router();

// lista los items de la bitacora
router.post('/', [
  check('dna', 'El valor del ADN no debe estar vacío').not().isEmpty(),
  // check('dna', 'El valor del ADN debe ser un array de NxN').custom(validaArray)
], isMutant);

router.get('/stats', statsMutations);

module.exports = router;