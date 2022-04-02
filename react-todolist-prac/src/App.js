import { useEffect, useState} from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([])
  const todos = {
    value : "",
    text : "",
  }

  // 인풋 체인지값을 계속 주시하는 함수
  const handleChange= (e) => {
    setTodo(e.target.value)
  }

  //추가 버튼을 누르면 작동하는 함수
  const handleSubmit= () => {
    todos.value = todo
    setTodolist(list => [...list, todo])
    setTodo("")
  }

//todolist가 변경될때마다 로컬스토리지에 저장
  useEffect(()=>{
    if(todolist.length > 0){
      localStorage.setItem("todos", JSON.stringify(todolist))
    }
  },[todolist])

// 반복문을 통한 리스트 렌더링
  const renderingList=()=>{
    console.log(localStorage.key("todos") !== null)
    if(localStorage.key("todos") !== null){
      let test = JSON.parse(localStorage.getItem("todos"))
      const result = []
      for(let i = 0; i < test.length; i++){
        result.push(<li> {test[i].value} <p><button>delete</button></p></li>)
      }
      return result
    }
    return <p>hello</p>
  }

  //테스트용 삭제 버튼
  const testDelete = (number) =>{
    
    console.log(`click!!!! this is ${number}`)
    const temp = todolist
    temp.pop(number)
    console.log(temp)
    setTodolist(temp)
    console.log(todolist)

    return 
  }
  //테스트용 입력후 리스트 생성
  const testrander = () => {
    const rs = []
    for(let i = 0; i < todolist.length; i++){
      rs.push(<li>{todolist[i]}<button id={i} onClick={() => testDelete(i)}>delete</button></li>)
    }
    return rs
    
  }
  
  //최종 렌더링 화면
  return (
    <div>
        <h1> My Todo App </h1>
        <input onChange={handleChange} value={todo} placeholder="input your todo list..."></input>
        <button onClick={handleSubmit}>add here!</button>
      <hr/>
        <div>
          {testrander()}
        </div>
    </div>
  );
}

export default App;
