const { get } = require("express/lib/request");
const { json, default: res } = require("express/lib/response");
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);

const testqry = async (req, res) => {
    res.json({test:"tttt"})
}

const island_buy = async (req, res) => {
    const data = req.body.island
    console.log(data);
    const buy_isl = await models.island.create(data,
    {
        fields:["is_name","is_type","is_point","is_land","is_popularity","is_owner","is_img","is_wallet"]
    })

    
    res.json(buy_isl)
}

const get_island = async (req, res) => {

    const island = await models.island.findAll()
    
    res.json(island)
}


module.exports = {
    testqry,
    island_buy,
    get_island,
};

//3x3  1200   /   4x4  300 island
// 