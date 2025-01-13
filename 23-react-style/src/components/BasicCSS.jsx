export default function BasicCSS() {
  const childDiv = {
    backgroundColor: "pink",
    width: "100px",
    height: "100px",
    textAlign: "center",
    lineHeight: "100px",
  };
  return (
    <div>
      <h3>스타일 적용 반법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>CSS 파일 만들어서 import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>styled-components library 사용 (설치 필요)</li>
        <li>SASS 이용 (설치 필요)</li>
      </ol>
      <h4 style={{ color: "#888" }}>인라인 스타일로 적용하기</h4>
      <div style={{ backgroundColor: "coral" }}>
        <div style={childDiv}>안녕하세요.!</div>
      </div>
      <h4>CSS 파일로 적용</h4>
      <div className="box1">
        <div>안녕하세요.?</div>
      </div>
    </div>
  );
}
