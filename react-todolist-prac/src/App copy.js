import React from "react";
import "./App.css"
import { useState, useEffect } from "react";




function Todo({ todo, index, markTodo, removeTodo }) {

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : null }}>{todo.text}</span>
      <div>
        <button onClick={() => markTodo(index)}>✅</button>
        <button onClick={() => removeTodo(index)}>❌</button>
      </div>
    </div>
  )
}


function FormTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    addTodo(todo);
    setTodo("");
  }


  useEffect(() => {
    window.localStorage.setItem("todoInLocal", JSON.stringify(todo))
  })



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="오늘 할 일을 입력하세요."
      ></input>
      <button type="submit">등록</button>
    </form>
  )
}




function App() {

  const [todos, setTodos] = useState(
    [
      {
        text: "This is a sample todo",
        isDone: false
      }
    ]

  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }



  return (
    <div className="app">

      <div className="container">
        <h1>Todo List</h1>
        <FormTodo addTodo={addTodo} />

        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div >
  );
}

export default App