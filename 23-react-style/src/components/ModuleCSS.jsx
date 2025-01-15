import style from "../style/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";

export default function ModuleCSS() {
  const setting = Names.bind(style);
  return (
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요??</div>
      </div>
      <br />

      <div className={`${style.first} ${style.second}`}>
        class를 여러개 지정하는 방법1 (template 리터럴)
      </div>
      {/* [1,2,3,4,5].join("-") >> 1-2-3-4-5
      ["first", "second"].join(" ") >> first second
      .join n array-g 문자열 bolgono
       */}
      <div className={[style.first, style.second].join(" ")}>
        class를 여러개 지정하는 방법2 (array, join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        class를 여러개 지정하는 방법3 (classnames module 설치)
      </div>
      <div className={setting("first", "second")}>
        classnames module 사용더해보기
      </div>
    </div>
  );
}
