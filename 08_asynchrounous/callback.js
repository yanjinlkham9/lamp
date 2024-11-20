function goMart() {
  console.log("마트에 갑니다");
}

//   callback 함수를 이용해서,
// pickDrink 작업이 끝난 후 pay가 실행되도록
function pickDrink(callback) {
  //3초동안 고민하는 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "콜라";
    price = 1500;
    // 10-12라인 실행후 callback 호출
    callback(); //매개변수로 받고 있는 callback 함수
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불`);
}

let price, product;
goMart();
pickDrink(pay); //pickDrink 이후에 pay 함수가 실행되도록
// 콜백으로 넘겨줌
//pay();
