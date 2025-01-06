export default function PracJSX() {
  let name = "로이";
  let animal = "강아지";
  let a = 10;
  let b = 3;
  return (
    <div>
      <h2>
        1. 제 반려 동물의 이름은{" "}
        <span style={{ textDecoration: "underline" }}>{name}</span> 입니다.
        <span style={{ textDecoration: "underline" }}>{name}</span>는{" "}
        <span style={{ textDecoration: "underline" }}>{animal}</span>입니다.
      </h2>
      <h2>
        <div>2. {3 + 5 == 8 ? "정답입니다" : "오답입니다"}</div>
      </h2>
      <h2>
        <div>3. {a > b && "a가 b보다 큽니다"}</div>
      </h2>
    </div>
  );
}
