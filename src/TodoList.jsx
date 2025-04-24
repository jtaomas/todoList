import { useContext, useEffect } from "react"
import { useState } from "react"
import { TodoContext } from "./context/todocontext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { EditTodo } from "./EditTodo.jsx"

function TodoList() {
    const {todoList, setTodoList} = useContext(TodoContext)
    const toggleChecked = function(uuid) {
        setTodoList(todoList.map((todo) => {
            if (todo.uuid == uuid) { 
                return {...todo, checked: !todo.checked}
            }
            else {
                return todo
            }
        }))};

    const removeTodo = function(uuid) {
        setTodoList(todoList.filter(((todo) => (todo.uuid != uuid))))
    }

    const toggleEdit = function(uuid) {
        setTodoList(todoList.map((todo) => {
            if (todo.uuid == uuid) { 
                return {...todo, editable: !todo.editable}
            }
            else {
                return todo
            }
        }))
    }

    useEffect(() => {
        console.log("TodoList updated:", todoList);
    }, [todoList]);

    return(
        <>
            {todoList.map((todo) => {
                console.log(`this is todoList: ${todoList}`)
                console.log(`this is todo: ${todo}`)
                return todo.editable ? <EditTodo key={todo.uuid} todo={todo}></EditTodo> :
                <div className='todo-item' key={todo.uuid}>
                    <div className='checkbox-container'>
                        <input className='checkbox' id={`checkbox${todo.uuid}`} type="checkbox" onChange={(e) => {
                        toggleChecked(todo.uuid)}}/>
                    </div>

                    <label className={todo.checked ? 'todo-checked' : ''} htmlFor={`checkbox${todo.uuid}`}>
                        {todo.checked ? <s>{todo.task}</s> : todo.task}
                    </label>
                        
                    <div className="icons">
                        <FontAwesomeIcon className='icon' icon={faPencil} onClick={(e) => {
                            toggleEdit(todo.uuid)
                        }} inverse />
                        <FontAwesomeIcon className='icon' icon={faTrash} onClick={(e) => {
                            removeTodo(todo.uuid)
                        }} inverse />
                    </div>
                </div>
                }
                
            )
            }
        </>
        )
    }

export default TodoList