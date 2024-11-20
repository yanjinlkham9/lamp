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

//async await
async function exec() {
  await call("kim");
  await back("back");
  await hell("callback hell");
}

exec();
