//문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowercase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon  "

//문자열 indexing
console.log(str1[0])
console.log(str1[0] + str1[11])

// Sonny단어 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

//length 속성
console.log(str1.length)
console.log(str2.length)

//메소드 사용
// trim, toUpperCase, toLowerCase
// 문자열.method의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim())
console.log(str2.trim().length)
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice
let fruit = "applemango"
// 찾고싶은 문자열의 index번호 반환
console.log(fruit.indexOf("e"))
console.log(fruit.indexOf("a"))
console.log(fruit.indexOf("apple")) //0 ugnii hamgin ehend bga usgiig olj ugnu
console.log(fruit.indexOf("mango")) //5
console.log(fruit.indexOf("z")) // -1 없는 문자열을 찾으려고 하면 -1 반환

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) //아무것도 안 나옴'', 문자열에 없어서

// slice
console.log(fruit.slice(5)) //mango  5부터 끝가지 
console.log(fruit.slice(3,6)) //lem 6번이 미포함
console.log(fruit.slice(-1)) // o last index-s ehled tooloh
console.log(fruit.slice(-4)) // ango -4s hoishh

//replace, replcaceAll 
let msg1 = "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~~"))
console.log(msg1.replaceAll("o", "OO"))
console.log(msg1)

let date = "2024.11.06"
// YYYY-MM-DD
date = date.replaceAll(".", "-")
console.log(date)

let hello = "hello"
console.log(typeof(hello))
let hello2 = hello.split() //['hello']
console.log(hello2)
hello2 = hello.split("") //(5) ['h', 'e', 'l', 'l', 'o']
console.log(hello2)
hello2 = hello.split('e') //(2) ['h', 'llo']
console.log(hello2)

console.log(typeof hello2)

//['2024' , '11', '06']
date = (date.split('-'))
console.log(date)

//====배열======
console.log('====배열===')

let arr1 = [1,2,3,4,5]
let arr2 = ['quakka', "rabbit", 'puppy', "hamster"]

//추가: 맨 끝에 번호를 알고 있을때 바로 추가 가능
arr1[5] = 6
console.log(arr1)
arr1 = [1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) //제거하는 값 반환하면서 실제 값을 삭제
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) //제거하는 값 반환하면서 실제 값을 삭제
console.log(arr2)

// 배열 .includes(요소) 배열의 요소가 있는지 없는지 확인
console.log('includes??')
console.log(arr2.includes("cat"))
console.log(arr2.includes("quakka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) //4가 몇번째 index에 있는지를 확인

//reverse(), 순서 뒤집기
arr1.reverse() //기존 배열이 변경됨
console.log(arr1)

//join(''): 배열->문잘열로 병합
str1 = arr1.join()
console.log(str1) //join에 아무것도 안 쓰면 배열 안의 컴마까지 문자열 됨
str1 = arr1.join('-')
console.log(str1) 

//for of, forEach 
let arr3  = [1,5,3,4,5]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f']

//기본 for 문
for(let i=0; i < arr3.length; i++){
    console.log(arr3[i])
}

//for of 문
for(let el of arr3){ //arr3을 한바퀴 돈다
    console.log(el)
}

//forEach(익명함수)
//forEach(function(a[,b,c])): a는 꼭 있어야 함
arr3.forEach(function(num,i,arr){
    console.log("요소", num)
    console.log("배열의 index", i)
    console.log("arr3", arr)
    console.log("-----")
})

arr3.forEach((el)=>{
    console.log(el)
})

//filter, map, find
//매개변수로 들어가는 익명함수에 리턴값이 필수
console.log('---filter----')
arr2 = ['quakka', "rabbit", 'puppy', "hamster"] //재할당

//filter: return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six=arr2.filter(function(el){
    return el.length===6
})
console.log(six)

console.log('---find----')
// find: hamgiin turuund olsongoo yvuulna
let six2 = arr2.find(function(word){
    return word.length===6
})
console.log(six2)

console.log('---map----')
// map
let arr4 = [1,2,3,4,5]
let multiArr=arr4.map(function(number){
    return number*3
})
console.log(multiArr)


multiArr=arr4.map((number)=> number*3)
console.log(multiArr)

//object 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};
for(let area in areaNum){
    console.log(area) //key > 문자열로 반환중
    //값에 접근
    console.log(areaNum[area])
}