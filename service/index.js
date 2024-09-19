const poke = require("../model/poke.js");

const getgetRamdomService = async (type) => {
  const reqQuery = type ? {
    types: { $all: [type] },
    "sprites.front_default": { $ne: null }
  } : {
    "sprites.front_default": { $ne: null }
  }
  const count = await poke.countDocuments(reqQuery);
  console.log("count", count)
  const ramdom = Math.floor(Math.random() * count);
  const res = await poke.findOne(reqQuery).skip(ramdom);
  const data = JSON.parse(JSON.stringify(res));
  const r = Math.random() * 100;
  data.isShiny = r <= 0.22;
  return data;
}

module.exports = {
  getgetRamdomService,
};