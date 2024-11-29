const Comment = require("../model/Comment");
//GET /
exports.main = (req, res) => {
  res.render("index");
};

//GET /comments
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { commentInfos: Comment.commentInfos() });
};
//GET /comment/:id
exports.comment = (req, res) => {
  console.log(req.params);
  const comments = Comment.commentInfos();
  const commentId = req.params.id; //
  console.log("commentId:", commentId);
  console.log(comments[commentId - 1]); //댓글의 실제 정보

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", {
    commentInfo: comments[commentId - 1],
  });
};
