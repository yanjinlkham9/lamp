export function Props1(props) {
  const { food, color } = props;
  const fontColor = { color: color };
  return (
    <div>
      <h6 style={fontColor}>{food}</h6>
      <p>
        {food}은 만두는 다양한 재료를 반죽으로 감싸 만든 음식으로, 한국을 비롯한
        동아시아 국가들에서 인기가 많습니다. 찌거나 굽거나 튀기는 방법으로
        조리하며, 속재료로는 고기, 채소, 두부, 해산물 등이 사용됩니다.
      </p>
    </div>
  );
}

Props1.defaultProps = {
  food: "당근",
};
