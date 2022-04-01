import { useState, useEffect} from "react"
function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([])
  const handleChange= (e) => {
    setTodo(e.target.value)
  }
  const handleSubmit= (e) => {
    console.log(e.target.value)
    setTodolist((todolist) => [...todolist, todo])
    localStorage.setItem("todoInLocal", todolist)
    
  }
  useEffect((e) => {
    console.log(e)
  },[todo])
  console.log(localStorage.getItem("todoInLocal"))
  const test = () => {
    
    return <ul>
      <li>hello world</li>
      <button>delete</button>
      <li>list1... {localStorage.getItem("todoInLocal")}<button>delete</button></li>

    </ul>
  }
  return (
    <div>
        <h1> My Todo App</h1>
        <input onChange={handleChange} value={todo} placeholder="input your todo list..."></input>
        <button onClick={handleSubmit} value={todo}>add here!</button>
      <hr/>
        <div>
              {test()}
        </div>
    </div>
  );
}

export default App;
