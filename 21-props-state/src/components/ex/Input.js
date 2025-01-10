export default function Input({ setData }) {
  const handleChange = (event) => {
    // console.log("target: ", event.target);
    // console.log("current target: ", event.currentTarget);
    setData((prevState) => {
      return {
        ...prevState,
        content: event.target.value,
      };
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={handleChange}
      />
    </div>
  );
}
