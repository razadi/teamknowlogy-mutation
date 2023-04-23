const {rightDiagonal, leftDiagonal, validaArray} = require('./matrix');

const baseNitrogenada = /([ATGC])\1{3,4}/;

class mutation {

  constructor (transformer) {
    this.transformer = transformer;

    this.findBaseNitrogenada = (dna) => {
      const straight = dna.filter((string) => {
        return baseNitrogenada.test(string);
      });

      const right = rightDiagonal(dna).filter((string) => {
        return baseNitrogenada.test(string);
      });

      const left = leftDiagonal(dna).filter((string) => {
        return baseNitrogenada.test(string);
      });

      return straight.concat(right).concat(left);
    };

    this.hasMutation = (dna) => {
      validaArray(dna);

      const mutation = this.findBaseNitrogenada(dna);
      return mutation.length > 1;
    }
  }
};

module.exports = new mutation();