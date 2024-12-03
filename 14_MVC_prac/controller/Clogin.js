const express = require("express");
const loginInfos = require("../model/Login");
// const user = require("../model/login2");

//GET '/'
exports.main = (req, res) => {
  res.render("index");
};

//POST '/login'

exports.register = (req, res) => {
  console.log(req.body);
  console.log("model>>", loginInfos.loginInfo());
  //{ id: 'abc', password: 'qwer1234' }

  // const {id, password} = loginInfos.loginInfo(); //gj bichvel shuud id, password gd haritsuulj bolno
  if (
    req.body.userId === loginInfos.loginInfo().id &&
    req.body.userPw === loginInfos.loginInfo().password
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};

//POST 'register2'
exports.register2 = (req, res) => {
  console.log(loginInfos.user);
  /* apple//1234//사과사과
  banana//4321//바나나나나
  cocoa//qwer1234//미떼 */
  const users = []; //[{id, pw, name}]
  const userIds = []; //["apple", "banana", "cocoa"]
  const userData = loginInfos.user.split("\n");
  console.log(userData);
  //[ 'apple//1234//사과사과', 'banana//4321//바나나나나', 'cocoa//qwer1234//미떼' ]
  userData.forEach((user) => {
    // user = 'apple//1234//사과사과'
    const userInfoArr = user.split("//"); //[banana, 4321, 바나나나나]
    const userObject = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObject);
    userIds.push(userInfoArr[0]);
  });
  console.log("users:", users, "/", "userIds:", userIds);
  ////////////////////요청 정보 바탕으로 회원이 맞는지 확인
  const idx = userIds.indexOf(req.body.userId);
  // ["a", "b", "c"].indexOf("c"); //2
  // ["a", "b", "c"].indexOf("d"); //-1
  console.log("idx ", idx);

  //idx>=0 userIds에 있는 회원
  //idx가 -1이라면 userIds에 없는 회원
  if (idx >= 0) {
    console.log("id가 있는 회원");
    if (req.body.userPw === users[idx].realPw) {
      console.log("비밀번호 일치");
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log("비밀번호 불일치");
      res.send({ isSuccess: false });
    }
  } else {
    console.log("아이디가 없는 회원");
    res.send({ isSuccess: false });
  }
};
