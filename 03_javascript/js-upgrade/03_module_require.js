//module1.js의 모든 데이터 객체 형채호 가져오기
const module1 = require('./03_module01.js') //bugdiig duudah
console.log(module1);

//가지고 오소 싶은 데이터만 가져오기 (객체 구조분해할당)
const {colors} = require('./03_module01.js') //colorsiig zuvhun duudaj ashglah
console.log(colors)

// 가져오는 방식은 똑같음
const module2 = require('./03_module02.js')
console.log(module2)

const{name, sayHi} = require('./03_module02.js')
console.log(name)
sayHi()