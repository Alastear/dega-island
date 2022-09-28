const { get } = require("express/lib/request");
const { json, default: res } = require("express/lib/response");
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
const factory_type = require("../data/factory_type.json")
var models = initModels(sequelize);

const testqry = async (req, res) => {
  res.json({ test: "tttt" })
}

const get_users = async (req, res) => {

  const users = await models.users.findAll()

  res.json(users)
}

const gacha_factory = async (req, res) => {
  const wallet = req.body.user_wallet
  const gacha_rolls = req.body.rolls
  const gacha_counts = req.body.user_guerantee
  const star_one = 85.6;
  const star_two = 10;
  const star_three = 4;
  const star_four = 0.4;

  let arr = []

  for (let index = 0; index < 1; index++) {
    let rolls = 1;
    let countfor_two = gacha_counts.rarity_2
    let countfor_three = gacha_counts.rarity_3
    let countfor_four = gacha_counts.rarity_4
    let carditem = [];
    let guarantee = "";

    let dnr = []
    for (let index = 0; index < gacha_rolls; index++) {
      if (countfor_two == 9) {
        guarantee = "2"
      }
      if (countfor_three == 24) {
        guarantee = "3"
      }
      if (countfor_four == 249) {
        guarantee = "4"
      }
      //1.ไม้ / 2.น้ำ / 3.หิน / 4.เหล็ก / 5.เฮิร์บ / 6.ออร์บ
      let resp = searchBasedWeight(factory_type, star_one, star_two, star_three, star_four, false, guarantee);
      console.log(resp);
      dnr.push(resp)
    }


    let count_one = 0
    let count_two = 0
    let count_three = 0
    let count_four = 0

    dnr.forEach(e => {
      if (e.rarity == "1")
        count_one++
      if (e.rarity == "2")
        count_two++
      if (e.rarity == "3")
        count_three++
      if (e.rarity == "4")
        count_four++
    });

    let data = { "1": count_one, "2": count_two, "3": count_three, "4": count_four }

    dnr.push(data)
    rolls = 0
    arr.push(dnr)
  }

  res.json(arr);

}

function searchBasedWeight(card_data, star_one, star_two, star_three, star_four, one_or_ten, guarantee) {

  star_one *= 100;
  star_two *= 100;
  star_three *= 100;
  star_four *= 100;

  let weight = star_one + star_two + star_three + star_four

  let C = star_one;
  let U = C + star_two;
  let R = U + star_three;
  let E = R + star_four;
  const reloadNumber = (length) => Math.floor(Math.random() * length);

  const whenRarity = (symbol_rarity) => card_data.filter(o => o.rarity === symbol_rarity);

  let getItem = [];

  const rollItUp = (batas) => {
    for (let index = 1; index <= batas; index++) {
      let res, randNumber = Math.floor(Math.random() * parseFloat(weight));
      if (R < randNumber && randNumber <= E || guarantee == "4") {
        res = whenRarity("4");
        getItem.push(res[reloadNumber(res.length)]);
      }
      else if (U < randNumber && randNumber <= R || guarantee == "3") {
        res = whenRarity("3");
        getItem.push(res[reloadNumber(res.length)]);
      }
      else if (C < randNumber && randNumber <= U || guarantee == "2") {
        res = whenRarity("2");
        getItem.push(res[reloadNumber(res.length)]);
      }
      else if (randNumber <= C) {
        res = whenRarity("1");
        getItem.push(res[reloadNumber(res.length)]);
      }
    }
  }

  if (one_or_ten === false) {
    rollItUp(1);
  }
  else if (one_or_ten === one_or_ten) {
    let res = whenRarity("4");
    getItem.push(res[reloadNumber(res.length)]);
    rollItUp(one_or_ten - 1);
  }
  let shuffledArray = [];
  let stop = false;
  while (stop === false) {
    if (getItem.length < 1) stop = true;
    else {
      var index = Math.floor(Math.random() * getItem.length);
      var item = getItem[index];
      getItem.splice(index, 1);
      shuffledArray.push(item);
      stop = false;
    }
  }
  return shuffledArray;
}

module.exports = {
  testqry,
  get_users,
  gacha_factory
};

//3x3  1200   /   4x4  300 island
// 