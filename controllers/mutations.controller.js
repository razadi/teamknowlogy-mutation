const {response, request} = require('express');
const mutation = require('../helpers/mutation');
const db =  require('../models');
const Mutation = db.mutation;
const { QueryTypes } = require('sequelize');

const isMutant = async (req=request, res=response) => {
  const {dna} = req.body;
  const mutant = mutation.hasMutation(dna);
  // se agrega el registro a la DB
  const muta = await Mutation.create({dna: dna.toString(), mutant});
  res.status(mutant ? 200 : 403).json({mutant});
};

const statsMutations = async (req=request, res=response) => {
  const query = `select case mutant when 1 then 'SI' else 'NO' end as mutante, count(id) as total from mutations group by 1`;
  const items = await db.sequelize.query(query, { type: QueryTypes.SELECT });

  const count_mutations = items ? items[1].mutante==='SI' ? items[1].total : items[0].total : 0;
  const count_no_mutation = items ? items[1].mutante==='NO' ? items[1].total : items[0].total : 0;
  const ratio = count_mutations / count_no_mutation;

  res.json({
    count_mutations,
    count_no_mutation,
    ratio
  });
};

module.exports = {
  isMutant,
  statsMutations
};