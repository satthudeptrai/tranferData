const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yugi = new Schema({
  id: Number,
  name: String,
  typeline: Array,
  type: String,
  humanReadableCardType: String,
  frameType: String,
  desc: String,
  descVn: String,
  race: String,
  atk: Number,
  def: Number,
  level: Number,
  attribute: String,
  archetype: String,
  ygoprodeck_url: String,
  card_sets: Array,
  card_images: Array,
  card_prices: Array
});
module.exports = mongoose.model('yugi', yugi);