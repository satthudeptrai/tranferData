const { getgetRamdomService } = require("../service/index.js");
class Controller {
  getRamdom = async (req, res, next) => {
    try {
      const { type } = req.query;

      const data = await getgetRamdomService(type);

      res.json(data);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new Controller;