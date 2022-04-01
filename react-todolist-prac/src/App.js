import { useState } from "react"
function App() {
  const [todo, setTodo] = useState("");
  
  console.log(todo)

  return (
    <div>
      <h1> My Todo App</h1>
      <input value={todo} placeholder="input your todo list..."></input>
      <button>add here!</button>
      <hr/>

    </div>
  );
}

export default App;
