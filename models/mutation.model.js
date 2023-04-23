module.exports = (sequelize, Sequelize) => {

  const Mutation = sequelize.define('mutation', {
    dna: Sequelize.STRING,
    mutant: Sequelize.BOOLEAN
  });

  return Mutation;
};