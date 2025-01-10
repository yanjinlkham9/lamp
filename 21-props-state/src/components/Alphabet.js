import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    {
      id: 1,
      alpha: "a",
    },
    {
      id: 2,
      alpha: "b",
    },
    {
      id: 3,
      alpha: "c",
    },
    {
      id: 4,
      alpha: "d",
    },
    {
      id: 5,
      alpha: "e",
    },
  ]);
  const [input, setInput] = useState("");
  //   console.log([1, 2, 3, 4].concat(10)); //zgr shuud ard n index 5deer 10 nemegdene
  const addAlpha = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1] + 1,
      alpha: input,
    });
    setList(newList);
    setInput("");
  };
  //input tag에 대고 엔터를 눌렀을 때 등록이 되도록
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };

  //삭제
  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };

  //filter n array butsaana, endees 4,5 l butsana
  const newArr = [1, 2, 3, 4, 5].filter((el) => {
    return el > 3;
  });
  //   console.log("newARRR: ", newArr);
  return (
    <div>
      <h2>Alphabet</h2>
      <input
        type="text"
        value={input}
        onKeyDown={activeEnter}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
