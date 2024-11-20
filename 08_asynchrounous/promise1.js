function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
      console.log(name, "반가워");
    }, 1000);
  });
}
function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(txt);
      resolve(txt);
      console.log(txt, "을 실행했구나");
    }, 1000);
  });
}

function hell(msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(msg);
      console.log("여기는", msg);
    }, 1000);
  });
}

//promise
call("kim")
  .then(function (result) {})
  .then(function (txt) {
    txt = "back";
    console.log(txt, "을 실행했구나");
  })
  .then(function (msg) {
    msg = "callback hell";
    console.log("여기는", msg);
  });
