const axios = require("axios");
const { connect, disconnect } = require("../db/setting.js");
const poke = require("../model/poke.js");
let index = 0;
const test = async () => {
  await connect();
  const res = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0',
  });
  await res.data.results.forEach(async (item) => {
    const data = await axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${item.name}`,
    });
    const dataTranfer = {
      ...data.data,
      abilities: data.data.abilities.map(item => item.ability.name),
      types: data.data.types.map(item => item.type.name),
      sprites: {
        back_default: data.data.sprites.back_default,
        back_female: data.data.sprites.back_female,
        back_shiny: data.data.sprites.back_shiny,
        back_shiny_female: data.data.sprites.back_shiny_female,
        front_default: data.data.sprites.front_default,
        front_female: data.data.sprites.front_female,
        front_shiny: data.data.sprites.front_shiny,
        front_shiny_female: data.data.sprites.front_shiny_female,
      
      },
      moves: data.data.moves.map(item => {
        return {
          name: item.move.name,
          lv: item.version_group_details[0].level_learned_at
        }
      }),
      hp: {
        base_stat: data.data.stats[0].base_stat,
        effort: data.data.stats[0].effort,
      },
      attack: {
        base_stat: data.data.stats[1].base_stat,
        effort: data.data.stats[1].effort,
      },
      defense: {
        base_stat: data.data.stats[2].base_stat,
        effort: data.data.stats[2].effort,
      },
      attackSp: {
        base_stat: data.data.stats[3].base_stat,
        effort: data.data.stats[3].effort,
      },
      defenseSp: {
        base_stat: data.data.stats[4].base_stat,
        effort: data.data.stats[4].effort,
      },
      speed: {
        base_stat: data.data.stats[5].base_stat,
        effort: data.data.stats[5].effort,
      },
    }
    await poke.create(dataTranfer);
    index++;
    console.log("index", index)
  });
}
test();