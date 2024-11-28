const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const app = express();
const PORT = 8080;

//middleware 설정
// 1.view folder 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 2. body parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//3. static folder 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
//4. multer 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); //어디에 저장 될지
      //uplaoads 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) >> 확장자만 리턴
      //done-g uursduu tohiruulj bolno cb function
      const extension = path.extname(file.originalname); //.png, .webp,...
      //path.basename(파일이름.확장자, 확장자) >> 파일이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
        //Date.now(): adilhan nertei bol davhtsuulahguigeer ognoo bichj ugnu
      );
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 }, //5MB
});

//API
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/profile", uploadDetail.single("fileName"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.file.path);
  /* {
  userId: 'a',
  userPw: '12',
  userName: 'aaa',
  userAge: '1'
}
{
  fieldname: 'fileName',
  originalname: '26139_img.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '26139_img1732673233469.png',
  path: 'uploads\\26139_img1732673233469.png',
  size: 469955
}  */

  // res.render({ file: req.file, fileInfo: "result.ejs", userInfo: req.body });
  res.render("result.ejs", {
    // ...req.body,
    userInfo: req.body,
    fileInfo: req.file,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
