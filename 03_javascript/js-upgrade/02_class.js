// class: 객체를 만들 떄 사용하는 틀
/*
속성: 만들어진 연도, 집의이름, 창문의 개수
함수(메소드): 건물 나이 메소드, 창문의 개수 출력 메소드
*/ 

class House{
    constructor(name, year, window){
        this.name = name;
        this.year = year;
        this.window = window;
    }

    getAge(){
        console.log(`${this.name}은 건축한지 ${2024-this.year}년 들었어요.`)
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}입니다.`)
    }
}

let house1 = new House('House1', 2021, 2);
let house2 = new House('House2', 1789, 1);

house1.getAge();
house2.getAge();
house1.getWindow();
console.log(house1.name)

console.log('====상속======')

// Apartment가 House에 포함되는 관계
class Apartment extends House{
    constructor(name, year, window, floor, windowMaker){
        super(name, year, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}. 층수는 ${this.floor}이고 창문계수는 ${this.window}개 입니다`
    }

    // overriding - 메소드 재정의
    // 부모 클래스의 메소드를 똑같이 쓰고 싶지만 내용을 다르게 만들고 싶을 때

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}입니다. ${this.windowMaker}에서 만들었습니다.`)
    }


}
const ap1 = new Apartment('raemian', 2023, 6, 19, 'KCC')
ap1.getAge();
ap1.getWindow();
console.log(ap1.getAptInfo());
console.log(ap1)


