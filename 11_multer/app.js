const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const app = express();
const PORT = 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");
//2. body parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//3. static folder 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
//4. multer 설정
const upload = multer({
  dest: "uploads/", //어디에 저장될지, 자동으로 생김
});

//file name, size, extension 등 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); //어디에 저장 될지
      //uplaoads 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) >> 확장자만 리턴
      const extension = path.extname(file.originalname); //.png, .webp,...
      //path.basename(파일이름.확장자, 확장자) >> 파일이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.extname", path.extname(file.originalname));
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});
/* API */
app.get("/", (req, res) => {
  res.render("index.ejs");
});

//single(userfile n form-s file upload hj bga nudnii name)
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); //file정보는 req.file 에서 확인
  console.log(req.file);
  // {
  //   fieldname: 'userfile', //form 내부에 정의한 name값
  //   originalname: 'beach2.jpg', //원본 파일명 (컴퓨터안에 있던)
  //   encoding: '7bit',  //파일 인코딩 타입
  //   mimetype: 'image/jpeg', //파일 타입
  //   destination: 'uploads/', //파일 저장경로
  //   filename: '2a3d66ab0f1e0c58bd8a65d60caa440f', //저장된 파일명
  //   path: 'uploads\\2a3d66ab0f1e0c58bd8a65d60caa440f',  //업로드 파일 전체 경로
  //   size: 123397 //파일크기 (byte)
  // }
  res.send("응답");
});
//하나의 input에 여러개 파일
//.array()
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  // console.log(req.file); //undefined
  console.log(req.files); //파일 여러 개 일때
  /* {
    fieldname: 'multifiles',
    originalname: 'apple.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'uploads/',
    filename: 'apple1732518384631.jpg',
    path: 'uploads\\apple1732518384631.jpg',
    size: 235310
}[] 배열형태로 업로드한 파일 수로 나옴
    */
  console.log(req.body);
  res.send("업로드 완료");
});

//여러 개의 input에 파일 업로드
//.fields() 사용
//fields의 매개변수는 배열: [{name: 'name값1'}, ...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    console.log(req.files); //upload.fields로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.body);
    /*
    {filename1:[{upload file 정보}],filename2:[{upload file 정보}],...}
    */
    res.send("업로드 완료");
  }
);
//동적폼 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);

  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
