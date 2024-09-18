const axios = require("axios");
const connect = require("./db/setting.js");
const poke = require("./model/poke.js")
let index = 0;
const test = async () => {
  await connect();
  const res = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0',
  });
  await res.data.results.forEach(async (item) => {
    const po = await axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${item.name}`,
    });
    index++;
    console.log("index", index)
    await poke.create(po.data);
  });
  console.log("done")
}
test();
