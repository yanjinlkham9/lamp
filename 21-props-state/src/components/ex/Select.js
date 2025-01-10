export default function Select({ setData }) {
  return (
    <div>
      과일:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return {
              ...prevState,
              fruit: e.target.value,
            };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return {
              ...prevState,
              background: e.target.value,
            };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return {
              ...prevState,
              color: e.target.value,
            };
          });
        }}
      >
        <option value="black">검정색</option>
        <option value="white">흰색</option>
        <option value="red">빨강</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </div>
  );
}
