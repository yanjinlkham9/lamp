import Container from "../components/lecture/Container";
import EventObject from "../components/lecture/EventObject";
import {
  PropsType1,
  PropsType2,
  PropsType3,
} from "../components/lecture/PropsTypes";
import SetText from "../components/lecture/SetText";
import TodoList from "../components/lecture/TodoList";

export default function Lecture() {
  return (
    <main>
      <PropsType1 name="allo" />
      <PropsType2 width="123px" color="red" height="100px" />
      <PropsType3 width="100px" height="100px" text="hi" color="gray" />
      <Container>
        <SetText />
        <EventObject />
        <TodoList />
      </Container>
    </main>
  );
}
