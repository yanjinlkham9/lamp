const express = require("express");
const loginInfos = require("../model/Login");

exports.main = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  console.log(req.body.userPw);
  console.log(loginInfos.loginInfo().realPw);
  if (
    req.body.userId === loginInfos.loginInfo().id &&
    req.body.userPw === loginInfos.loginInfo().password
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};
