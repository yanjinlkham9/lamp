function change(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

//promise 객체 > then을 이용한 chaining
change("red")
  .then(() => {
    return change("orange");
  })
  .then(() => {
    return change("yellow");
  })
  .then(() => {
    return change("green");
  })
  .then(() => change("blue"));
