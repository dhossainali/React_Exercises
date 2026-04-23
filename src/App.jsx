import { Colors } from "./Colors"





function App() {
  const colors=[{id:1, name:'red'}, {id:2, name:'blue'}, {id:3, name:'black'}]
  return (
    <>
      <Colors colors={colors}/>
    </>
  )
}

export default App
