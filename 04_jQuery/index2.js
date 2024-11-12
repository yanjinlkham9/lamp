//input value 설정 및 가져오기
//val()
function getValue(){
    let value = $('input').val() //val() 값 가져오는 함수
    alert(value)
}
function setValue(){
    $('input').val('다른 글자로 설정')
}
//css()
function changeCssJS(){
    let span = document.querySelector('span')
    span.style = 'font-size: 20px; color:red;'
}
function changeCssJQ(){
    $('span').css('font-size', '40px')
    $('span').css('color', 'blue')
}
//attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href', 'http://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href', 'http://www.daum.net')
}

//text()
function changeTextJS(){
    let p = document.querySelector('.p-text')
    p.innerText= 'js로 바꿈.'
}
function changeTextJQ(){
    $('.p-text').text('JQ로 바꿈.')
} 
//html()
function changeHtmlJS(){
    let p = document.querySelector('.p-html')
    p.innerHTML = '<em>Javascript</em>'
}
function changeHtmlJQ(){
    $('.p-html').html('<h2>jQuery</h2>')
}

//append()
function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '마지막 자식으로 추가된 li (js)'
    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li (JQ)</li>')
}
//prepend()
function prependJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = 'prepend JS'
    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>prepend JQ</li>')
}
//after()
function afterJS(){
    let ul = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = 'after JS'
    ul.after(li)
}
function afterJQ(){
    $('.green').after('<li>after JQ</li>')
}
//before()
function beforeJS(){
    let ul = document.querySelector('.orange')
    let li = document.createElement('li')
    li.innerText = 'before JS'
    ul.before(li)
}
function beforeJQ(){
    $('.orange').before('<li>before JQ</li>')
}

//remove()
function removeJS(){
    let li = document.querySelector('.li2')
    li.remove()
}
function removeJQ(){
    $('.li2').remove()
}

//empty()
function emptyJS(){
    let nums = document.querySelector('ul.nums')
    nums.innerHTML = '' //''빈문자열로 덮어쓰기
    
}
function emptyJQ(){
    $('.nums').empty()
}
//요소 탐색
function findParent(){
    console.log($('.child2').parent())
}
function findParents(){
    console.log($('.child2').parents())
}
function findNext(){
    console.log($('.child2').next())
}
function findPrev(){
    console.log($('.child2').prev())
}
function findChildren(){
    console.log($('.parent').children())
}

//class 조작하기 
function addClass(){
    $('#hi').addClass('fs-50')
}
function removeClass(){
    // $('#hi').removeClass('color-blue')
    $('#hi').removeClass() //class 모두 제거
}
function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}
function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}