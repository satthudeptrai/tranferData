const poke = require("../model/poke.js");

class Controller {
  getRamdom = async (req, res, next) => {
    try {
      const { type } = req.query;
      const reqQuery = type ? {
        types: { $all: [type] }
      } : {}
      const count = await poke.countDocuments(reqQuery);
      const ramdom = Math.floor(Math.random() * count);
      const data = await poke.findOne(reqQuery).skip(ramdom);
      res.json(data);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new Controller;