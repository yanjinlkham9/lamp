// 1-1 배열의 구조분해 문법
const arr1 = ['tomato', 'kiwi', 'orange']
console.log(arr1[0])
const tomato = arr1[0]
const [a, b, c] = arr1
console.log(tomato)
console.log(a)

const arr2 = ['red', 'orange', 'pink', 'yellow']
const [red, orange, , yellow] = arr2
console.log(red, orange, yellow)

const [v1, v2, v3, v4, v5] = arr2
console.log(v1, v2, v3, v4, v5)

// const [a1, b1] = arr2  //맨끝에 있는 요소들을 생략 가능

// 변수 교환
let value1="second"
let value2='first'

let temp = value1 //temp=second
value1 = value2  //value1= first value2=second
value2 = temp //value2=secoond

console.log(value1, value2)

value1 = "second";
value2 = "first";
[value2, value1] = [value1, value2]
console.log(value1, value2)

// 1-2. 객체의 구조분해 할당 문법
const obj = {
    title: '제목',
    content: '내용', 
    num:10
}
//값에 접근할 때는 점, 대괄호 접근법 이용
console.log(obj.title)
console.log(obj['title'])

const {num, title, content} =obj
console.log(title)
console.log(num)

const {n1, t1, c1}= obj
console.log(n1)

const{content:c2, title:t2} = obj
console.log(t2, c2)

//2. spread와 rest ...
const arr3 =[1,2,3,4,5]
const arr4 =['a','b','c']
console.log(arr3)

for(let el of  arr3){
    console.log(el)
}
console.log(...arr3) //가지고 와서 펼쳐줌, 접근 불가
console.log(...arr4)

// arr3, arr4 합치기 >>1차원 배열로
const arr5 = arr3.concat(arr4)
console.log("arr5", arr5)

const arr7 = [arr3, arr4] //2차원 배열 됨
console.log(arr7)

const arr6 = [...arr3, ...arr4] 
console.log(arr6)

//2-2 string
const str = 'alliehigh'
let strToArr = [...str]
let strToArr2 = str.split('')
// string to array >> split()
// Array to string >> join()
console.log(strToArr)
console.log(strToArr2)

//2-3 object
let obj1 ={
    name: 'allie',
    height: 163,
    friend:null,
    married: false
}
let obj2={
    name: '진형',
    like: ['sleeping', 'programming'],
    greeting: function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..키는 ${this.height}입니다..`)
    }
}
obj2.greeting()

let me = {...obj1, ...obj2}
me.greeting()
console.log(me)

me={...obj1, ...obj2,
    gender: 'female'
}
console.log(me)

console.log("-----rest-------")
// ...rest 사용하기, function parametreer damjuulj bichh
function test(a,b){
    console.log(a);
    console.log(b);
}

test(1,2);
test('hello')

function test2(...val){
    console.log(val) //rest로 받아준 결과는 배열입니다.
    const[a,b,c, ...rest] =val  //[2,3,4,5,6,7,8]
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('rest', rest)
}
test2(2,3,4,5,6,7,8)

function addNumber(...val2){
    console.log(val2)
    let sum=0
    // for(let i=0; i<=val2.length; i++){
    //     sum = sum+i
    // }

    val2.forEach(function(number){
        sum+=number;
    })
    return sum;

}
let sumResult = addNumber(1,2,3,4,5)
console.log(sumResult)



