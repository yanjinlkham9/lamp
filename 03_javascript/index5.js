//1. for문
/*
for (변수 선언과 초기화; 조건식(어디까지 감소, 증가할건지); 증감식){
    반복실행 코드 작성
}
*/
//증감식: i++, i = i+1, i+=1
for(let i=0; i<10; i++){
    console.log('안녕', i)
}

for(let i=0; i<10; i=i+2){
    console.log(`안녕 ${i}`)
}

//1~5까지 출력하는 방법
for(let i= 1; i <= 5; i++){
    console.log(`${i}`)
}

for(let i=1; i<6; i++){
    console.log(`${i}`)
}

for(let i=0; i<5; i++){
    console.log(i+1)
}

//5 ~ 1 출력
for(let i=5; i>0; i--){
    console.log(i)
}

let fruits= ['apple', 'banana', 'orange', 'mango']
console.log(fruits.length)
let i
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

let n = 11
let sum = 0
for(let i=0; i <= n; i++){
    sum= sum+i
}
console.log(sum)

let arr= [99, 98, 85, 77, 100, 50]
let summ = 0
for(let i= 0; i < arr.length; i++){
    summ = summ + arr[i]
}
console.log(summ)

//1이상 20이하의 수 중에서 짝수만 더한 값 출력하기
let sum3 = 0
for(let i = 1; i <=20; i++)
{
    if(i%2===0)
    {
        sum3=sum3+i
    }
}
console.log(sum3)

let sum4=0
for(let i = 0; i <= 20; i+=2){
    sum4 = sum4 + i
}
console.log(sum4)