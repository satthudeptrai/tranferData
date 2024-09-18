const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://01648794017a:2PuNSe1yMRvWf4Hs@cluster0.djo61.mongodb.net/poke');
    console.log("connect")
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;