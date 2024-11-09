//1. 태그내부 내용 변경
/* 
-innerText
-textContent
-innerHTML
*/

let div1 = document.getElementById('div1')
div1.innerText = '     여기는 <b> 첫번째 </b> 태그입니다. &hearts;     /'
//2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)
div1.innerHTML = '여기는 <b> 첫번째 </b> 태그입니다. &hearts;'
div1.textContent = '      여기는 <b> 첫번째 </b> 태그입니다. &hearts;     /'
console.log(div1.textContent)

// 2. 속성에 접근
/*
- 요소.속성명
- getAttribute() : 속성 값 가져 오기
- setAttribute() : 속성 값을 설정하기
*/ 
// pooh, naver id
let naver = document.getElementById('naver')
console.log(naver)
// naver.setAttribute("속성이름", "바꿔줄 속성값")
naver.setAttribute("href", "http://www.google.com")
console.log(naver.href)
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').alt = "푸사진"

// 3. CSS 변경
let h1
let list
h1 = document.querySelector('h1')
list = document.querySelectorAll('li')
// console.log(h1)
// console.log(list)

//배경색을 분홍, 글자색 흰색, 글짜크기 1.3rem
for(let el of list){
    // el.style.color = "#fff"
    // el.style.backgroundColor = "pink" 
    // el.style.fontSize = "1.3rem"
    el.classList.add('friends')
}

h1.classList.add('add-h1')
// h1.classList.remove('add-h1')
// h1.classList.toggle('add-h1')

console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList)

// 4. 부모, 자식, 형제 노드 찾기
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')

console.log("--자식 노드 접근----")
//배열형태로 가져옴
console.log(friends.children)
console.log(friends.children[0])

console.log("--부모 노드 접근----")
//배열형채가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode)

console.log("--형제 노드 접근----")
//배열형채가 아닌 요소 자체를 가져옴
console.log('이전 형제', tigger.previousElementSibling)
console.log('다음 형제', tigger.nextElementSibling)

// 5. 노드 생성, 추가, 삭제
let container = document.querySelector('.container')
console.log(container)

// 요소 생성 
let p = document.createElement('p')  //p tag 만듦
p.innerText = "새로 추가된 p"
p.style.fontWeight = "700"
p.style.background = "red"
p.id = "append-p"

// 요소 추가
console.log(p)

//선택된 요소(container)의 맨 뒤 자식요소로 추가됨
container.append(p)

let p2 = document.createElement('p')
let p3 = document.createElement('p')
p2.innerText = "p2"
p3.textContent = "p3"
p2.classList.add('p-2')
p3.classList.add('p-3')


// container.append(p2)
// container.appendChild(p3) :하나만 추가 가능
container.append(p2, p3, "안녕하세요")

//prepend() : 선택된 요소의 맨앞 자식으로 추가
// friends = document.querySelector('#friends')
let li = document.createElement('li')
li.innerText = "캉가"
li.classList.add('friends')
friends.prepend(li)

//before
let h3 = document.createElement('h3')
h3.textContent = "h3 tag"
h1.before(h3) 
//after
let h2 = document.createElement('h2')
h2.innerText = 'h2 tag'
h1.after(h2)

//요소 삭제 > remove(), removeChild()
let firstLi = document.querySelector('li')
let ul = firstLi.parentElement

//firstLi.remove()  //선택된 요소가 삭제됨
//삭제할요소.remove()

ul.removeChild(firstLi)
//부모요소.removeChild(삭제할 자식 요소)

//실습
const parentDiv = document.querySelector('.container')
let div2 = document.createElement('div')
let img = document.createElement('img')
let span = document.createElement('span')
span.innerText = "이요르"
img.src = "/img/small_img.png" //img.setAttribute('src', "path")
img.classList.add('img')
img.alt = "애플 로고"
div2.append(img, span)
parentDiv.append(div2)
