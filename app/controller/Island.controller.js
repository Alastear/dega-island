const { get } = require("express/lib/request");
const { json, default: res } = require("express/lib/response");
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);

const testqry = async (req, res) => {
    res.json({test:"tttt"})
}

const island_buy = async (req, res) => {
    const data = req.body

    console.log(data);
    res.json({"test" : "success"})
}

module.exports = {
    testqry,
    island_buy
};