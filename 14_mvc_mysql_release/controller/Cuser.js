// TODO: 컨트롤러 코드
const User = require("../model/User");
exports.main = (req, res) => {
  res.render("index");
};

exports.signUp = (req, res) => {
  res.render("signup");
};
exports.signIn = (req, res) => {
  res.render("signin");
};
exports.createUser = (req, res) => {
  User.createrUser(req.body, (result) => {
    res.send({
      id: result,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};
exports.loginUser=(req,res)=>{
  User.loginUser(req.body, (result)=>{
    
  })
}
