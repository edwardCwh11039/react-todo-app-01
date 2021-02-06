import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function Todo() {
  return (
    <div className=" grid-container">
      <Form />
      <TodoList />
    </div>
  );
}

export default Todo;
