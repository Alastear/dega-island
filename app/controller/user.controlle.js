const { get } = require("express/lib/request");
const { json, default: res } = require("express/lib/response");
var initModels = require("../../models/init-models");
const sequelize = require("../config/database");
var models = initModels(sequelize);

const whitelist = async (req, res) => {
    let data = req.body.data
    console.log(data);
    const user_whitelist = await models.users.create(data,
        {
            fields: ["user_name", "user_email", "user_wallet"]
        }
    )
    res.json(user_whitelist)
}


module.exports = {
    whitelist
};

//3x3  1200   /   4x4  300 island
// 