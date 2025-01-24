import React, { useRef, useState } from "react";
import { TodoItemInteface } from "../../types/interface";
import TodoItem from "./TodoItem";

export default function TodoList() {
  //todo List를 받을 state
  const [todos, setTodos] = useState<TodoItemInteface[]>([]);
  //새로운 todo item의 텍스트를 받을 state
  const [newTodo, setNewTodo] = useState<string>("");
  //input tag에 접근하기 위한 ref 객체 생성
  const inputRef = useRef<HTMLInputElement>(null);

  //새로운 todo 추가
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updateTodo = [
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          done: false,
        },
      ];
      setTodos(updateTodo);
      setNewTodo("");
      focusInput();
    }
  };

  //todo 완료 state 변경
  const toggleComplete = (id: number) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id == id ? { ...todo, done: !todo.done } : todo;
    });
    setTodos(updatedTodo);
  };

  //enter눌렀을 때 투두 추가
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      addTodo();
    }
  };

  //input focus 처리하기
  const focusInput = () => {
    inputRef.current?.focus();
  };

  console.log(todos);
  return (
    <div style={{ backgroundColor: "aquamarine" }}>
      <h2>TodoList</h2>
      <input
        type="text"
        ref={inputRef}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder=" 새로운 투두 작성"
      />
      <button onClick={addTodo}>추가</button>
      <button onClick={focusInput}>focus</button>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
      <h2>DoneList</h2>
      <ul>
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
      </ul>
    </div>
  );
}
