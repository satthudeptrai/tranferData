const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poke = new Schema({
  any: Object 
});
module.exports = mongoose.model('poke', poke);