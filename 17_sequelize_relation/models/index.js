"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};
//(1) Sequelize 클래스를 통해서 sequelize 객체를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//(2) 모델을 불러오면서 인자로 정보 전달
//sequelize, Sequelize --model 불러오는 거
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

//(3) 모델간 관계 설정
//3-1 player:profile=1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id",
});

//3-2 team: player= 1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", //내가 정해주는 키
  sourceKey: "team_id", //실제 참조할 이름
  //실제 team model의 컬럼명과 일치해야 함
  //models/Team.js의 PK
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid",
  targetKey: "team_id",
});

//3-3 team: game= N:M
//중개테이블 (teamgame) 활용해야 함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id", //for team model; 내가 정한 이름
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

//(4) db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
