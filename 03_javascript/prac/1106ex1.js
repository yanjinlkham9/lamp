let arr = []
for(let i=0; i<101; i++){
    arr.push(i)

}
console.log(arr)

let sum=0
for(let i=0; i< arr.length; i++){
    sum = sum + i
}
console.log('for문 sum: ', sum)

let sum2 =0
for(let a of arr){
    sum2 +=a
    
}
console.log('for of문 sum2  : ', sum2)


let sum3 = 0
arr.forEach((a)=>{
    sum3+=a
    
})
console.log('forEACH문 sum: ', sum3)