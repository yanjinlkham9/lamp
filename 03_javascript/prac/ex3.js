
for(let i=0; i<=10000; i++){
    if(i%13==0 && i%2==1){
        console.log(i)
    }
}

//promt 이용
let thirteen = Number(prompt("숫자 입력:"))
for(let i=0; i<=thirteen; i++){
    if(i%13==0 && i%2==1){
        console.log(i)
    }
}