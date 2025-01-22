function tsPrint(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
tsPrint(1, 2, 3);
tsPrint(1, 3);
// tsPrint(2,3,4,5,6,7)  //err

function tsPrint2(a: number, b: number, c = 5) {
  //함수 타입이 void인걸 endes uuruu oloh bolomjtoi
  console.log("print2");
  console.log(a);
  console.log(b);
  console.log(c);
}

tsPrint2(1, 2, 3);
tsPrint2(1, 2); //c=5가 있어서 바로 1,2,5 나옴

function concatStr(a: string, b: number): string {
  return a + b;
}
function circleArea(r: number): number {
  return r * r * Math.PI;
}

//함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

//return keyword 없는 return
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

//함수 호출
console.log("원의 넓이: ", circleArea(5));
console.log("사각형 넓이: ", squareArea(5, 2));
console.log(`삼각형 넓이: ${triangleArea("3", "9")}`);

//goingOn(); //끝나지 않는 함수

//오버로딩 (overloading)
// - 함수에서 매개변수의 개수, 타입 / 반환타입 다를 때
// -같은 함수의 이름으로 매개변수의 종류와 개수를 다르게 선언 가능
// 비슷한 기능일 때만 사용 가능

function add(x: string, y: string): string;
function add(x: number, y: number): number;

//overloading 함수 구현
function add(x: any, y: any) {
  return x + y;
}
console.log(add(1, 2));
console.log(add("1", "2"));
// console.log(add("1", 2)); //호출 불가능
