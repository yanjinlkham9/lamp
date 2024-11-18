const express = require('express')
const app = express()
const PORT = 8080

// middleware 설정 추가
//viewengine 설정
app.set('view engine', 'ejs')
app.set('/views', 'views')

// static folder 설정 추가
app.use('/static', express.static(__dirname + '/public'))
// static 이라는 경로를 /public 대신에 사용할 거임

//get 요청 들어왔을때 send()
app.get('/', function(request, response){
    /*
    - requist: client가 server에게 보내는 요청
    - response: server가 client에게 보내는 응답
    */ 
    // console.log(request)
    // response.send('hello express')
    response.render('test.ejs')
})


app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})
