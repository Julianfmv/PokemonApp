const { Router } = require("express");
const getApiTypes = require("../controllers/getApiTypes");

const typesRouter = Router();

typesRouter.get("/", async (req, res) => {
  try {
    const allTypes = await getApiTypes();
    if (allTypes.error) throw new Error(allTypes.error);
    return res.status(200).json(allTypes);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = typesRouter;
