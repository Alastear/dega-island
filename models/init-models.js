var DataTypes = require("sequelize").DataTypes;
var _Dega_Achievement = require("./Dega_Achievement");
var _Dega_Events = require("./Dega_Events");
var _Dega_Gacha_log = require("./Dega_Gacha_log");
var _Dega_Monster_Data = require("./Dega_Monster_Data");
var _Dega_Monster_Inv = require("./Dega_Monster_Inv");
var _Dega_Monster_Team = require("./Dega_Monster_Team");
var _Dega_News = require("./Dega_News");
var _Dega_PVP_log = require("./Dega_PVP_log");
var _Dega_Quest = require("./Dega_Quest");
var _Monster_Active_Skill = require("./Monster_Active_Skill");
var _Monster_Status_Effect = require("./Monster_Status_Effect");
var _User_Login_Log = require("./User_Login_Log");
var _Users = require("./Users");
var _factory = require("./factory");
var _factory_type = require("./factory_type");
var _island = require("./island");
var _land = require("./land");

function initModels(sequelize) {
  var Dega_Achievement = _Dega_Achievement(sequelize, DataTypes);
  var Dega_Events = _Dega_Events(sequelize, DataTypes);
  var Dega_Gacha_log = _Dega_Gacha_log(sequelize, DataTypes);
  var Dega_Monster_Data = _Dega_Monster_Data(sequelize, DataTypes);
  var Dega_Monster_Inv = _Dega_Monster_Inv(sequelize, DataTypes);
  var Dega_Monster_Team = _Dega_Monster_Team(sequelize, DataTypes);
  var Dega_News = _Dega_News(sequelize, DataTypes);
  var Dega_PVP_log = _Dega_PVP_log(sequelize, DataTypes);
  var Dega_Quest = _Dega_Quest(sequelize, DataTypes);
  var Monster_Active_Skill = _Monster_Active_Skill(sequelize, DataTypes);
  var Monster_Status_Effect = _Monster_Status_Effect(sequelize, DataTypes);
  var User_Login_Log = _User_Login_Log(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var factory = _factory(sequelize, DataTypes);
  var factory_type = _factory_type(sequelize, DataTypes);
  var island = _island(sequelize, DataTypes);
  var land = _land(sequelize, DataTypes);

  Dega_Achievement.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Dega_Achievement, { as: "Dega_Achievements", foreignKey: "user_id"});
  Dega_Monster_Inv.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Dega_Monster_Inv, { as: "Dega_Monster_Invs", foreignKey: "user_id"});
  Dega_Monster_Team.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Dega_Monster_Team, { as: "Dega_Monster_Teams", foreignKey: "user_id"});
  User_Login_Log.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(User_Login_Log, { as: "User_Login_Logs", foreignKey: "user_id"});

  return {
    Dega_Achievement,
    Dega_Events,
    Dega_Gacha_log,
    Dega_Monster_Data,
    Dega_Monster_Inv,
    Dega_Monster_Team,
    Dega_News,
    Dega_PVP_log,
    Dega_Quest,
    Monster_Active_Skill,
    Monster_Status_Effect,
    User_Login_Log,
    Users,
    factory,
    factory_type,
    island,
    land,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
