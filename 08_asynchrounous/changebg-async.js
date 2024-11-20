function change(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

async function exec() {
  await change("red");
  await change("yellow");
  await change("green");
  await change("blue");
  await change("navy");
}

exec();
