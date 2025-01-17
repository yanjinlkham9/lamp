import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="NotFound">
      <h2>Page Not Found (┬┬﹏┬┬)</h2>
      <Link to="/"> Home으로 이동</Link>
    </div>
  );
}
