let num: number = 1;
num = 2;
//num="str" //number 형 변수에 string타입을 할당할 수 없음
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

//array 선언
let numArr: number[] = [1, 2, 4, 5];
let strArr: Array<string> = ["A", "b", "c"];

let arr1: (number | string)[] = [1, 2, 3, "dd"];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 324]];

//모든 데이터타입 가능
let arr3: any[] = [1, 2, 4, "ds", [], {}, null, false];

//object
let obj1: object = {
  name: "A",
};

//typescript는 알아서 타입추론을 한다
//암목적 타입 지정

let aa = 5; //aa를 암목적으로 number형으로 지정
let bb = "hello";
// aa="sss" //error 숫자형에 문자열 대입 불가능
