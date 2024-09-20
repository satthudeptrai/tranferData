const poke = require("../model/poke.js");
const yugi = require("../model/yugi.js");
const packCard = require("../model/packCard.js");
const translate = require('translate-google-api');

const getgetRamdomService = async (type) => {
  const reqQuery = type ? {
    types: { $all: [type] },
    "sprites.front_default": { $ne: null }
  } : {
    "sprites.front_default": { $ne: null }
  }
  const count = await poke.countDocuments(reqQuery);
  const ramdom = Math.floor(Math.random() * count);
  const res = await poke.findOne(reqQuery).skip(ramdom);
  const data = JSON.parse(JSON.stringify(res));
  const r = Math.random() * 100;
  data.isShiny = r <= 0.22;
  return data;
}

const getgetRamdomCardService = async (type) => {
  const reqQuery = type ? {
    card_sets: {
      $elemMatch: {
        set_name: type
      }
    },
  } : {};
  const countRes = yugi.countDocuments(reqQuery);
  const count = await countRes;
  const ramdom = Math.floor(Math.random() * count);
  const card = await yugi.findOne(reqQuery).skip(ramdom);
  const text = await translate(
    card.desc,
    { from: 'en', to: 'vi' }
  );
  const data = {
    ...JSON.parse(JSON.stringify(card)),
    desc: text[0]
  }
  return data;
}

module.exports = {
  getgetRamdomService,
  getgetRamdomCardService,
};