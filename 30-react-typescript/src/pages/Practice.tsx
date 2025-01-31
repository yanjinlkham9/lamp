import { Link } from "react-router-dom";
export default function Practice() {
  return (
    <>
      <div>
        <h1>practice</h1>
        <Link to={"codingon"} style={{ marginRight: "10px" }}>
          코딩온실습문제
        </Link>
        <Link to={"matzip"}>맛집 모음</Link>
      </div>
    </>
  );
}
