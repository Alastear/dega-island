const { get } = require("express/lib/request");
const { json, default: res } = require("express/lib/response");
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
const factory_type = require("../data/factory_type.json")
var models = initModels(sequelize);

const gacha_factory_guarantee = async (req, res) => {
  const wallet = req.body.user_wallet
  const card_data = factory_type
  const rolls = req.body.rolls
  const reloadNumber = (length) => Math.floor(Math.random() * length);

  const whenRarity = (symbol_rarity) => card_data.filter(o => o.rarity === symbol_rarity);
  let getItem = [];

  const rollItUp = (batas) => {
    let arr_fac = []
    for (let index = 1; index <= batas; index++) {
      let resp
      resp = whenRarity("5");
      const reloadtype = (length) => Math.floor(Math.random() * length);
      for (let index = 0; index < rolls; index++) {
        let getfactory = reloadtype(resp.length);
          arr_fac.push(resp[getfactory])
      }
    }
    getItem.push(arr_fac)
  }

  rollItUp(1);

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
  res.json(shuffledArray);

}

const gacha_factory_guarantee_unique = async (req, res) => {
  const wallet = req.body.user_wallet
  const card_data = factory_type
  const rolls = req.body.rolls
  const reloadNumber = (length) => Math.floor(Math.random() * length);

  const whenRarity = (symbol_rarity) => card_data.filter(o => o.rarity === symbol_rarity);
  let getItem = [];

  const rollItUp = (batas) => {
    let arr_fac = []
    for (let index = 1; index <= batas; index++) {
      let resp
      resp = whenRarity("5");
      const reloadtype = (length) => Math.floor(Math.random() * length);
      for (let index = 0; index < rolls; index++) {
        let getfactory = reloadtype(resp.length);
        const even = (element, index) => {
          console.log(element['factory_type'],resp[getfactory]['factory_type']);
          if(element['factory_type'] == resp[getfactory]['factory_type']){
            return true
          }else {
            return false
          };
        }
        if (arr_fac.length == 0) {
          arr_fac.push(resp[getfactory])
        }
        else if (!arr_fac.some(even)) {
          arr_fac.push(resp[getfactory])
        } else {
          index--;
        }
      }
    }
    getItem.push(arr_fac)
  }

  rollItUp(1);

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
  res.json(shuffledArray);
}

module.exports = {
  gacha_factory_guarantee_unique,
  gacha_factory_guarantee
};

//3x3  1200   /   4x4  300 island
// 