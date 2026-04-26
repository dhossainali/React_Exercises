import { useContext } from "react"
import { LanguageContext } from "./App"


export default function Hello(){
    const language=useContext(LanguageContext)
    return ( 
    <div>
        <h2>{language==='en'? 'Hello, World!': 'Ciao, il Mondo!'}</h2>
    </div>
    )
}