import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers(){
    const [inputValue, setInputValue]=useState('')
    const [userNameList, setUserNameList]=useState([])
    
    function handleInputChange(event){
        setInputValue(event.target.value)
    }

    function addUserName(event) {
        event.preventDefault()
        if (!inputValue.trim()) return;
        setUserNameList(prev=>[...prev, {id:crypto.randomUUID(), userName:inputValue}])
        setInputValue('')
        }
    return (
        <form onSubmit={addUserName}>
            <input type="text" value={inputValue} 
                onChange={handleInputChange} placeholder="Type username to search for"/>
            <button type="submit">submit</button> 
            <ul>
                {userNameList.map(item=>{ return (
                <li key={item.id}>
                    <GithubUser username={item.userName}/>
                </li> )})}
            </ul>
        </form>
    )
}