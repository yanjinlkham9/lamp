const models = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  res.render("login");
};
exports.register = (req, res) => {
  res.render("register");
};

exports.post_register = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("post_register: ", result);
    res.end();
  });
};

exports.post_login = (req, res) => {
  console.log(req.body);
  const userSession = req.session.user;
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("post_login: ", result);
    if (result) {
      res.send(true);
    } else false;
  });
};
