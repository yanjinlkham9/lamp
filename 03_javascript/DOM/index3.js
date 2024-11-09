/*
동작의 종류: click, dbclick, scroll, change, submit, ...
- addEventListener(동작의 종류, function(){})
- <태그 onchange="함수의이름()" onclick="함수의이름()"></태그>
   on[동작의 종류] 속성으로 이벤트 제어 가능
*/ 

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

// btn1.addEventListener("동작의이름", function(){동작})
btn1.addEventListener("click", function(){
    console.log('버튼1이 클륵됨')
    alert('버튼1이 클록됨')
})

btn1.addEventListener("mouseover", function(){
    //this은 자기 자신을 가리킴
    // btn1.style.backgroundColor = "aqua"
    this.style.backgroundColor = "aqua"
})

//btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener("click", ()=>{
    let div = document.createElement('div')
    div.innerText = "hi"
    div.style.backgroundColor = "pink"

    container.append(div)
})

//btn3
// 만들어진 div의 배경색을 바꾸기
btn3.addEventListener('click', changeColor)
// 함수 호출 시 괄호 필수적으로 생략해야함, 괄호 작성시 즉시 호출
function changeColor(){
    const divs= document.querySelectorAll('#container div')
    //[div, div, div, ...]
    for(let div of divs){
        div.style.backgroundColor = "skyblue"
        if(div== divs.length)
            div.style.backgroundColor = "yellow"
    }
    //막내요소만 노란

}

//btn4 
//배경색 노란색으로 변경, 글자가 검정색
btn4.addEventListener("click", changeBtnColor)
btn3.addEventListener("click", changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor = "yellow"
    this.style.color = "#000"
}

//btn5
function sayHi(){
    alert("안녕하세여, 버튼 5입니다.")
}

//=========================================
const btn = document.querySelector('button')
const input = document.querySelector('input')

/*1. [클릭 이벤트]*/
btn.addEventListener("click", function(event){
    // 클릭 이벤트에 관한 정보(event 객체)
    console.log(event)

    // 어떤 요소가 클릭됐는지 확인 가능
    console.log(event.target)
}) 

//==============
// 2. [키보드 이벤트]
input.addEventListener('keydown',function(event){
    // console.log(event)

    //방향키 아래, 위, 왼쪽, 오른쪽
    // console.log(event.code)
    // console.log(event.key)
    
    if(event.code==="ArrowLeft"){
        console.log('왼쪽 방향키 눌렸습니다')
    }else if(event.code==="ArrowRight"){
        console.log('오른쪽 방향키 눌렸습니다')
    }else if(event.code==="ArrowUp"){
        console.log('위쪽 방향키 눌렸습니다')
    }else if(event.code==="ArrowDown"){
        console.log('아래쪽 방향키 눌렸습니다')
    }else{
        console.log('방향키가 아닌 키보드 누르는 중')
    }
})

//=====================
//3. SCROLL event
// console.log(window)
window.addEventListener('scroll', (event) =>{
    // console.log(event)
    // console.log(event.target)
    // console.log(scrollY)
    //scrollY가 850에서 div opacity가 1되도록
    if(scrollY>850){
        document.querySelector('.pos').style.opacity="1"
    }
})

//=============================
//4. form event: [submit] event
let todoForm = document.querySelector('#todo-form') //form tag
let todos = document.querySelector('.todos')  //ul tag
// console.log(todoForm)
// console.log(todos)

todoForm.addEventListener('submit', function(e){
    e.preventDefault()
    //품이 제출되는것을 취소. 이벤트 전달을 막는 것
    // 새로고침 막음

    console.log('submit')

    // 품 내부의 input창 선택
    const todoInput = document.querySelector('input[name="todo"]')
    console.dir(todoInput) //요소가 가지고 있는 데이터를 출력
    // console.log(todoInput.value)/

    const todo = todoInput.value.trim()

    
    if(todo !==""){
        const li = document.createElement('li')
        li.textContent = todo
        todos.append(li)
        
    }else{
        alert("할일을 작성해주세요")
    }
    todoInput.value=""
})

//5. change event
const chgInput = document.querySelector('#change-input')
chgInput.addEventListener('change', function(){
    console.log('changed')
})

chgInput.addEventListener('input', function(){
    console.log('changing')
    //input 창의 value에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value
    
})