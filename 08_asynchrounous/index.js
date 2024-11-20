function goMart() {
  console.log("마트에 갑니다");
}

function pickDrink() {
  //3초동안 고민하는 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "콜라";
    price = 1500;
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불`);
}

let price, product;
goMart();
pickDrink(); //3000초 뒤에 실행되어서 맨 마지막에 실행
pay(); //그래서 product, price가 undefined
