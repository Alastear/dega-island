import { Router } from 'express';
const routes = new Router();
var initModels = require("../models/init-models");
const sequelize = require('./config/database');
var models = initModels(sequelize);
const Island = require("./controller/Island.controller");
const Factory = require("./controller/factory.controlle");
const Factory_guarantee = require("./controller/factory_guarantee_five.controll");


// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World Marketplace Island"}');
    res.send(json);
});

routes.post("/island/buy", Island.island_buy);
// routes.get("/island", Island.testqry);
routes.get("/island", Island.get_island);
routes.get("/users", Factory.get_users);
//gacha_fac
routes.post("/gacha/factory", Factory.gacha_factory);
routes.post("/gacha/factory/guarantee_unique", Factory_guarantee.gacha_factory_guarantee_unique);
routes.post("/gacha/factory/guarantee", Factory_guarantee.gacha_factory_guarantee);


export default routes;