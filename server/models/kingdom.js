const db = require('../dbConfig');

const findMany = async () => {
  return await db.query('SELECT * FROM `Kingdom`');
};

const findOne = async (id) => {
  const result = await db.query('SELECT * FROM `Kingdom` WHERE id = ?', [id]);
  return result[0][0];
};

module.exports = {
  findMany,
  findOne,
};
