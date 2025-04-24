import { useState } from "react"
import { TodoContext } from "./context/todocontext"
import { useContext } from "react"
import {v4 as uuidv4} from 'uuid';

function TodoInput() {
    const [userinput, setUserInput] = useState('')
    const {todoList, setTodoList} = useContext(TodoContext)

    function handleInputChange(e) {
        setUserInput(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        
        if (todoList.some(element => element.task === userinput)) {
            alert("You already made this item todo!")
        }
        else {
            setUserInput('')
            setTodoList([...todoList, {uuid: uuidv4(), task: userinput, checked: false, editable: false}])
        }
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={userinput} id='ftask' placeholder="What is the task today?" onChange={handleInputChange}></input>
                <input type="submit" id="todo-btn"/>
            </form>
        </>
    )
}

export default TodoInput

