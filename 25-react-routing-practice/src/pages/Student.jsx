import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function Student() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [searchQuery] = useSearchParams();
  const newName = searchQuery.get("name");
  return (
    <div>
      <p>
        학생 이름은 <span style={{ color: "red" }}>{name}</span> 입니다{" "}
      </p>
      {newName && (
        <p>
          실제 이름은 <span style={{ color: "green" }}>{newName}</span>
        </p>
      )}
      {/*       
      {newName ? (
        <p>
          학생 이름은 <span style={{ color: "red" }}>{name}</span> 입니다 실제
          이름은 <span style={{ color: "green" }}>{newName}</span>
        </p>
      ) : (
        <p>
          학생 이름은 <span style={{ color: "green" }}>{name}</span>입니다
        </p>
      )} */}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </div>
  );
}
