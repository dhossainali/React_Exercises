import { TodoList } from "./TodoList";




function App() {
  const color={id: 1, name: 'blue'};
  const colors=[{id:11, name: 'black'}, 
        {id: 12, name: 'red'}, {id:13, name: 'white'}, {id:14, name:'green'} 
  ]
  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
