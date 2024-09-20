const {
  getgetRamdomService,
  getgetRamdomCardService
} = require("../service/index.js");
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

  getRamdomCard = async (req, res, next) => {
    try {
      const { type } = req.query;

      const data = await getgetRamdomCardService(type);

      res.json(data);
      // res.send(`
      //   <img src="${data.card_images[0].image_url_small}">
      //   <img src="${data.card_images[0].image_url_cropped}">
      // `)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new Controller;