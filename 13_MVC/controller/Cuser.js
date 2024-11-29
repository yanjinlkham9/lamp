const User = require("../model/User");
//GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo()); //{}객체 값
  //   res.render("user", { userInfos: User.userInfo() });
  res.render("user", { ...User.userInfo() });

  /*  {...User.userInfo()}
   {
    realId: "cocoa",
    realPw: "qwer1234",
    name: "홍길동",
    age: 20,
  }

  {userInfos: User.userInfo()}
   userInfo: {
    realId: "cocoa",
    realPw: "qwer1234",
    name: "홍길동",
    age: 20,
  }
  
  */
};
