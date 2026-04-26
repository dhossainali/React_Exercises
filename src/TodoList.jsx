import { useState } from "react"

export function TodoList() {
    const todoList = []
    const [todos, setTodos] = useState(todoList)
    const [inputValue, setInputValue] = useState('')
    function updateTodos(event) {
        setInputValue(event.target.value)
    }
    function addTodo(event) {
        const value = event.target.value;
        setTodos([...todos, { id: crypto.randomUUID(), text: inputValue }])
        setInputValue('')
    }

    function resetTodo() {
        setTodos(todoList)
    }

    function removeTodo(idToRemove) {
        setTodos(previous => previous.filter((element) =>
            element.id !== idToRemove
        ))
    }
   
    return (
        <>
            <ul>
                {todos.map((e) => {
                    return (
                        <div key={e.id}>
                            <li >{e.text}</li>
                            <button type="button" onClick={() => removeTodo(e.id)}>Remove</button>
                        </div>
                    )
                })}
            </ul>
            <input type="text" value={inputValue} onChange={updateTodos} placeholder="Write down your todos " />
            <button type="submit" onClick={addTodo}>Add</button>
            <button type="button" onClick={resetTodo}>Reset</button>

        </>
    )
}