 // TODO: 문제 조건을 만족하는 js 코드 작성
      // (참고) article-box, img-box, text-center 클래스에 대한 스타일시트는 haed > style 태그에 이미 정의되어 있습니다.

      const section = document.querySelector("section");
      const icecreams = [
        "내가 아인슈페너?!",
        "엄마는 외계인",
        "민트 초콜릿 칩",
        "뉴욕 치즈케이크",
        "아이스 초당옥수수",
        "초콜릿 무스",
        "체리쥬빌레",
        "뮤! 넌 내거야",
        "오레오 쿠키 앤 크림",
      ];

      for(let i=0; i<=8; i++){
        
        let h3 = document.createElement('h3')
        let img = document.createElement('img')
        let div = document.createElement('div')
        let article = document.createElement('article')

        img.classList.add('img-box')
        img.src=`/img/icecream${i+1}.png`

        h3.classList.add('text-center')
        h3.innerText = "Top"+ [i+1]

        div.innerText = icecreams[i]
        div.classList.add('text-center')

        article.classList.add('article-box')

        article.append(img, h3, div)
        section.append(article)
      }

      