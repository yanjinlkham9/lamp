import { TodoItemInteface } from "../../types/interface";

interface Props {
  todo: TodoItemInteface;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          toggleComplete(todo.id);
        }}
      />
      <span>{todo.text}</span>
    </li>
  );
}
