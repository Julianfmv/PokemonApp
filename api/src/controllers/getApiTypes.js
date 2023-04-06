const { Type } = require('../db');

const getApiTypes = async () => {
  try {
    const types = await Type.findAll();
    if (!types.length) throw new Error('No Types found in the db!');
    return types;
  } catch (error) {
    return error.message;
  }
};

module.exports = getApiTypes;
