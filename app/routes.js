import { Router } from 'express';
const routes = new Router();
var initModels = require("../models/init-models");
const sequelize = require('./config/database');
var models = initModels(sequelize);
const Island = require("./controller/Island.controller");


// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World Marketplace Island"}');
    res.send(json);
});

routes.post("/island/buy", Island.island_buy);
routes.get("/island", Island.testqry);


export default routes;