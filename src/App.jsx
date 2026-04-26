import { createContext, useState } from "react"
import Hello from "./Hello"




export const LanguageContext =createContext()
function App() {
  const [language, setLanguage]=useState('en')
  function handleLanguage(language) {
    setLanguage(language)
  }
  return (
    <LanguageContext.Provider value ={language}>
      <button onClick={()=>handleLanguage('en')}>EN</button>
      <button onClick={()=>handleLanguage('it')}>IT</button>
      <Hello/>    
    </LanguageContext.Provider>
  )
}

export default App
