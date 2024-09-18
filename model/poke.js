const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poke = new Schema({
  abilities: Array,
  base_experience: Number,
  height: Number,
  weight: Number,
  id: Number,
  is_default: Boolean,
  name: String,
  past_abilities: Array,
  past_types: Array,
  types: Array,
  moves: Array,
  sprites: {},
  hp: {},
  attack: {},
  defense: {},
  attackSp: {},
  defenseSp: {},
  speed: {}
});
module.exports = mongoose.model('poke', poke);