const { connect, disconnect } = require("../db/setting.js");
const translate = require('translate-google-api');
const yugi = require("../model/yugi.js");
const packCard = require("../model/packCard.js");
const data = require("../test.json");
const test = async () => {
  await connect();
  await yugi.create(data.data);
  disconnect();
}
const test1 = async () => {
  let index = 0
  await connect();
  const list = [];
  data.data.forEach(element => {
    if(element?.card_sets) {
      index++;
      element.card_sets.forEach(item => {
        list.push(item.set_name)
      });
    }
  });
  const listSet = [...new Set(list)].map(item => {
    return {
      name: item
    }
  });
  await packCard.create(listSet);
  console.log("done")
}


const translateCard = async () => {
  await connect();
  let index = 0;
  const listCard = await yugi.find().skip(20).limit(10);
  listCard.forEach(async card => {
    const text = await translate(
      card.desc,
      { from: 'en', to: 'vi' }
    );
    card.descVn = text[0];
    await card.save();
    index++;
    console.log("index");
  })
  console.log("done");
  // disconnect();
}
translateCard();