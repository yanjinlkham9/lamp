const Visitor = require("../model/visitor");
// console.log(Visitor.getVisitors());

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVistors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};

// /visitor/:id GET
exports.getVisitor = (req, res) => {
  console.log(req.params);
  console.log(req.params.id); //{id:'1'}
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("한개의 데이터", result);
    res.send(result);
  });
};

// /visitor POST , 등록
exports.postVisitor = (req, res) => {
  console.log(req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("CVisitor result:", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

// /visitor DELETE , 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.body); //{id: '4}
  console.log(req.body.id); //'4
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제 완료");
  });
};
// /visitor PATCH  , 수정
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정 완료");
  });
};
