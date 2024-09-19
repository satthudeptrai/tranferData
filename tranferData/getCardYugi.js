const { connect, disconnect } = require("../db/setting.js");
const yugi = require("../model/yugi.js");
const data = require("../test.json");
const test = async () => {
  await connect();
  await yugi.create(data.data);
  disconnect();
}
test();