import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="Header">
      <span>logo</span>
      <div>
        <Link to={"/"} className="menu-item">
          홈으로
        </Link>

        <Link to={"/test"} className="menu-item">
          Test
        </Link>

        <Link to={"/products"} className="menu-item">
          Products
        </Link>
      </div>
    </header>
  );
}
