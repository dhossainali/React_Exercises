import { Color } from "./Color"
import { Colors } from "./Colors"



function App() {
  const color={id: 1, name: 'blue'};
  const colors=[{id:11, name: 'black'}, 
        {id: 12, name: 'red'}, {id:13, name: 'white'}, {id:14, name:'green'} 
  ]
  return (
    <>
      <Color color={color}/>
      <Colors colors={colors}/>
    </>
  )
}

export default App
