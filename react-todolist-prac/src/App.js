import { useEffect, useState} from "react"

function App() {
  //입력을 받기 위한 todo 변수
  const [todo, setTodo] = useState("");
  //입력받은 데이터를 배열화시키는 변수
  const [todolist, setTodolist] = useState([])
  //todo를 localstorage에 담기위한 딕셔너리
  const [test, setTest] = useState(true)
  const todos = {
    value : "",
    text : "",
  }
  const result = []
  //console.log(`app. result is ${result}`)


  // 인풋 체인지값을 계속 주시하는 함수
  const handleChange= (e) => {
    setTodo(e.target.value)
  }

  //추가 버튼을 누르면 작동하는 함수
  const handleSubmit= () => {
    
    todos.value = todo
    setTodolist(list => {
      return [...list, todo]
    })
    setTodo("")
  }

//todolist가 변경될때마다 로컬스토리지에 저장
  useEffect(()=>{
    //console.log('use effect')
    if(todolist.length > 0){
      localStorage.setItem("todos", JSON.stringify(todolist))
    }
  },[todolist])
// 반복문을 통한 리스트 렌더링
  //테스트용 삭제 버튼
  const clickDelete = (number) =>{
    
    console.log(`click!!!! this is ${number}`)
    const temp = todolist
    //반복문을 통해 삭제
    for(let i = 0; i < temp.length; i++){
      if(i === number){
        console.log(`i${i} is number${number}`)
        temp.splice(i,1)
      }
    }
    setTodolist(temp)
    console.log(`in click delete -> temp is ${temp}, todolist is ${todolist}`)
    //화면 렌더링용 스테이트
    if (test === true){
      setTest(false)
    }
    else {
      setTest(true)
    }

    return 
  }
  //테스트용 입력후 리스트 생성
  const testrander = () => {
    console.log('testrander!!')
    const lcli = localStorage.getItem("todos")
    const rs = []
    console.log(`localstorage is ${lcli} \ntodolist is ${todolist}`)
    console.log(localStorage.key("todos") === null)
    if(todolist.length <= 0 && localStorage.key("todos") !== null){
      console.log('bingo')
      console.log(JSON.parse(lcli))
      setTodolist(JSON.parse(lcli))
    }
    for(let i = 0; i < todolist.length; i++){
      rs.push(<li>{todolist[i]}<button id={i} onClick={() => clickDelete(i)}>delete</button></li>)
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
