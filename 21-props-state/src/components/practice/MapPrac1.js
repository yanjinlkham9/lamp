import { useState } from "react";

export default function MapPrac1() {
  const [list, setList] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      name: "네모",
      email: "nemu123@gmail.com",
    },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  //add
  const addRecord = () => {
    const newList = list.concat({
      name: inputName,
      email: inputEmail,
    });
    setList(newList);
    setInputName("");
    setInputEmail("");
  };
  //enter
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addRecord();
    }
  };
  //delete
  const deleteRecord = (name) => {
    const newRec = list.filter((email) => {
      return email.name !== name;
    });
    setList(newRec);
  };
  return (
    <div>
      <div onKeyDown={activeEnter}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => {
            setInputEmail(e.target.value);
          }}
        />
        <button onClick={addRecord}>등록</button>
      </div>

      <ul style={{ fontWeight: "bold" }}>
        {list.map((el) => {
          return (
            <li key={el.name} onDoubleClick={() => deleteRecord(el.name)}>
              {el.name}: {el.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
