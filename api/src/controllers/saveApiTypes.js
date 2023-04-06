const axios = require("axios");
const { Type } = require("../db.js");

const saveApiTypes = async () => {
  try {
    const response = await axios("https://pokeapi.co/api/v2/type");
    await Promise.all(
      response.data.results.map(async (type) => {
        let typeToFindOrCreate = {
          id: type.id,
          name: type.name,
        };
        let { name } = typeToFindOrCreate;
        await Type.findOrCreate({ where: { name } });
      })
    );
  } catch (error) {
    return error.message;
  }
};

module.exports = saveApiTypes;
