//const models = require('../models'); //model[객체]={Player:.. Profile: ...}

const { Op } = require("sequelize"); //sequelize operations 들어옴 (like, between, and etc)/
const { Player } = require("../models"); //only Player 가지고 옴
const { Profile } = require("../models");
const { Team } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

//전체 선수 조회
//GET /players
exports.getAllPlayers = async (req, res) => {
  try {
    //select * from player;
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//특정 선수 조회
//GET/players/:playerId
//player,profile 정보 조회 => join 필요
exports.getPlayer = async (req, res) => {
  try {
    //select playerId from player;
    console.log(req.params);
    //params n 문자열로 들어옴
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: { player_id: playerId },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      //attributes의 배열은 profile 테이블의 컬럼과 일치해야 함
    });
    res.send(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//선수 추가
//POST/players
/* 
{
  name: '손흥민',
  age: 30,
  team_id: 1
}
*/
exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    //{ name: '손흥민', age: 30, teamid: 1 }
    //const newPlayer = await Player.create(req.body) //ijilhen columnuud uchir ene heveer nemj bolno
    const newPlayer = await Player.create({
      //column name: data
      name: req.body.name,
      age: req.body.age,
      teamid: req.body.teamid,
    });
    res.send(newPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//수정
//PATCH/players/:playerId/team
exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const updatedPlayer = await Player.update(
      {
        //어떤 컬럼 바꿀지
        teamid: req.body.teamId,
      },
      {
        //where 조건
        where: {
          player_id: req.params.playerId,
        },
      }
    );
    res.send(updatedPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//DELETE/players/:playerId
//선수 삭제
exports.deletePlayer = async (req, res) => {
  try {
    console.log(req.params);
    //{ playerId: '2' }
    const isDeleted = await Player.destroy({
      where: {
        player_id: req.params.playerId,
      },
    });
    console.log("삭제 여부", isDeleted); //boolean-r hariu ireh uchir 1 0 g usgeer solih
    if (Boolean(isDeleted)) {
      res.send("삭제 성공");
    } else res.send(false);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

/*복잡한 where 조건 사용*/
//GET  /teams
//정렬, 검색 >> req.query 사용
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query); // {} {sort} {search}
    const { sort, search } = req.query;
    let teams;
    if (sort === "name_asc") {
      //팀을 이름순으로 정렬해서 전체 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"], //SELECT team_id, name FROM team
        order: [["name", "ASC"]], //order by name ASC
      });
    } else if (search) {
      //search keyboard 기준으로 검색 후 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"], //SELECT team_id, name
        where: {
          name: { [Op.like]: `%${search}%` },
        }, //WHERE name LIKE "%K%"
      });
    } else {
      //sort가 name_asc가 아니거나 search 가 안 들어왔을 때
      //전체 조회
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
      });
    }
    //검색 및 정렬 로직 종료

    // ------응답------------
    if (teams.length == 0) res.send("다시 검색하세요, 정보가 없음");
    else {
      res.send(teams);
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//GET /teams/:teamId
//특정 팀 조희
exports.getTeam = async (req, res) => {
  try {
    console.log(req.params);
    const teams = await Team.findOne({
      where: {
        team_id: req.params.teamId,
      },
    });
    res.send(teams);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

//GET /teams/:teamId/players
//특정 팀의 모든 선수 조회 >> join 사용
exports.getTeamPlayers = async (req, res) => {
  //1.특정 팀의 :"선수정보만" 조회
  /* try {
    const { teamId } = req.params; //1, 2, 3, ...
    const teamPlayers = await Player.findAll({
      where: { teamid: teamId },
    });
    res.send(teamPlayers);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
}; */

  //2. 특정 팀의 정보와 해당 팀 선수들의 정보 확인
  try {
    console.log(req.params);
    const players = await Team.findOne({
      where: { team_id: req.params.teamId },
      //join 시킬 키보드 include 사용
      include: [{ model: Player }],
    });
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
