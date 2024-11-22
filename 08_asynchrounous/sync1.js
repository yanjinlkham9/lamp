function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("call back hell");
    }, 1000);
  });
}

//async await
async function exec() {
  const name = await call("kim");
  console.log(name + "반가원");
  const txt = await back();
  console.log(txt, "을 실행했구나");
  const msg = await hell();
  console.log("여기는", msg);
}

exec();
