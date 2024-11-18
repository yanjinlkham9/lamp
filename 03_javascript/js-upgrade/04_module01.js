function getNumber(){
    let number = Math.floor(Math.random()*11);
    return number;
}

const numberData = [1,2,3,4,5]


// 내보내기를 맨 밑에 써야 함 둘다.
export {getNumber, numberData}