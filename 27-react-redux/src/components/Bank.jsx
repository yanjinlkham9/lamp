import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function Bank() {
  const balance = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>코딩온 은행</h2>
      <h5>잔액: {balance.toLocaleString()} </h5>
      <input
        type="number"
        value={number}
        step={10000}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch({ type: "increase", payload: number })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: number })}>
        출금
      </button>
    </>
  );
}
