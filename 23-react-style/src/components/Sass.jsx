import "../style/Sass.scss";
import img1 from "../assets/main.png";
export default function Sass() {
  return (
    <>
      <h4>SASS 사용 (.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">Button1</button>
        <button className="btn btn--opacity">Button2</button>
        <button className="btn btn--blue">Button3</button>
      </div>
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>
      {/* image 불러오기 */}
      <h2>image 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기</h5>
      <img
        src="../assets/main.png"
        alt="src내부의 사진은 바로 접근 불가능합니다"
      />
      <h5>import후 가져오기</h5>
      <img src={img1} alt="import후 가져오기" />

      <h5>css에서 background-image 속성으로 접근 </h5>
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      <h5>img tag애 경로 넣기</h5>
      <img
        src="/image/main.png"
        alt="public folder 내부에서 경로명으로 접근 가능, 단 /root로 바로 접근"
      />

      <img
        src={process.env.PUBLIC_URL + "/image/main.png"}
        alt="process.env.PUBLIC_URL 로 접근하면 조금 더 안전함"
      />
      <h5>css에서 background-image 속성으로 접근</h5>
      <div className="public-img img-test"></div>

      <h4>실습문제</h4>
      <div className="practice">
        <div className="practice-img prac1"></div>
        <div className="practice-img prac2"></div>
        <div className="practice-img prac3"></div>
        <div className="practice-img prac4"></div>
      </div>
    </>
  );
}
