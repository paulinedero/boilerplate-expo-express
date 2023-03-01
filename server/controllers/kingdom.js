const { findMany, findOne } = require('../models/kingdom');

const getAllKingdoms = async (req, res) => {
  const rawData = await findMany();
  res.json(rawData);
};

const getOneKingdom = async (req, res) => {
  const rawData = await findOne(req.params.id);
  res.json(rawData);
};

module.exports = {
  getAllKingdoms,
  getOneKingdom,
};
