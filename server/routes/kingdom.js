const kingdomRouter = require('express').Router();

const { getAllKingdoms, getOneKingdom } = require('../controllers/kingdom');

kingdomRouter.get('/', getAllKingdoms);
kingdomRouter.get('/:id', getOneKingdom);

module.exports = kingdomRouter;
