import HeaderMenu from "../components/HeaderMenu";
import { Link } from "react-router-dom";
export default function Practice() {
  return (
    <>
      <HeaderMenu />
      <div>
        <Link to="codingon" style={{ marginRight: "10px" }}>
          코딩온실습문제
        </Link>
      </div>
    </>
  );
}