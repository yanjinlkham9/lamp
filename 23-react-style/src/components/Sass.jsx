import "../style/Sass.scss";
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
    </>
  );
}
