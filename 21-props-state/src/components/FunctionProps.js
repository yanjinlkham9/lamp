export function FunctionProps(props) {
  console.log(props);
  console.log(typeof props); //object
  return (
    <div>
      <h5>{props.name}</h5>
      <p>
        {props.number} 개에 {props.krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps2(props) {
  const { name, number, krPrice } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps3({ name, number, krPrice }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number} 개에 {krPrice}원
      </p>
      <hr />
    </div>
  );
}
export function FunctionProps4() {}
