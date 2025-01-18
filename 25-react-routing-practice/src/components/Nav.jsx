import { Link } from "react-router-dom";
export default function Nav() {
  const style = { margin: "4px" };
  return (
    <div className="Nav">
      <h2>React router 실습</h2>
      <nav>
        <ul>
          <li style={style}>
            <Link to={"/student/sean"}>학생</Link>
          </li>
          <li style={style}>
            <Link to={"/student/codingon"}>코딩온</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=jisu">searchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
