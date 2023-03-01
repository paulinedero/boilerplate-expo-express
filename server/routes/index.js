const kingdomRouter = require('./kingdom');

module.exports = (app) => {
  app.use('/kingdom', kingdomRouter);
};
