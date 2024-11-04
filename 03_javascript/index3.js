/**
 * 함수
 * - 특정작업을 수행하기 위해 설계된 코드 집합
 * - 함수의 선언
 * - 키워드: function
 * - 함수의 이름: camelCase로 함수의 이름 작성
 * - (매개변수): 함수 내부에서 사용할 변수
 * - {스코프}: 함수의 내부 코드
 * 함수 선언문, 함수 표현식
 * - 함수 표현식: 변수에 함수를 저장
 * - 함수 선언문: 명시적 함수 선언
 * */ 

console.log("함수 선언문")
helloWorld1()
console.log("선언되기 전")
function helloWorld1(){
    console.log("Hello world 1")
}
console.log("선언된 후")
helloWorld1() //호출해야 화면에 출력 가능

function helloWorld2(){
    // return keyword
    // 함수 코드의 최종 결과값을 보관하기 위한 키워드
    return 'hello world 2'
    console.log('리턴 아래입니다')//return-s doosh bichgdsen n ajillahgui
}
console.log(helloWorld2())

console.log("함수 표현식")
// helloWorld3() 선언되기 전에 호출 불가
const helloWorld3 = function(){
    console.log("helloworld 3")
}
helloWorld3()

console.log("화살표 함수")
// helloWorld4() 선언되기 전에 호출 불가
const helloWorld4 = () => {
    console.log("helloworld 4")
}
helloWorld4()

// 매개변수가 있는 함수 만들기
// 1. 매개변수 1, 함수 선언문
function sayHello1(text){
    return text
}
console.log(sayHello1('hi'))
function sayHello2(text, name){
    return `${text}! ${name}`
}
console.log(sayHello2("안녕", "allie"))

// 2. 매가변수 2, 함수 표현식
const sayHello3 = function(text, name){
    console.log(`${text}! ${name}`)
}
sayHello3("안녕", "Allie")
// 3. 매개변수 2, 화살표 함수
const sayHello4 = (text, name) =>{
    return `${text}! ${name}`
}
const sayHelloValue = sayHello4("hello", "allie")
console.log(sayHelloValue)