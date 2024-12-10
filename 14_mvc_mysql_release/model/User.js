// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

exports.createrUser = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUES (null, '${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) throw err;
      cb(rows.insertId);
    }
  );
};

exports.loginUser = (cb) =>{
  conn.query(`SELECT id user WHERE userid='${data.userid}' `,(err, rows)=>{
    if (err) throw err;
    cb();
  })
}