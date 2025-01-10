export default function Result(props) {
  const { content, fruit, background, color } = props.data;
  //   console.log("data", data);
  return (
    <div>
      {/*결과 화면: img+p*/}
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      <p
        style={{
          backgroundColor: background,
          width: "50px",
          height: "50px",
          lineHeight: "50px",
          textAlign: "center",
          color: color,
        }}
      >
        {content}
      </p>
    </div>
  );
}
