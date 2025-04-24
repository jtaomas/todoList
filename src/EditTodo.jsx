import React from "react";
import { useContext } from 'react';
import { TodoContext } from "./context/todocontext";
import { useState } from "react";

export function EditTodo(props) {
    const [userinput, setUserInput] = useState("")
    const {todoList, setTodoList} = useContext(TodoContext)
    const todo = props.todo

    const editTodo = function(todo, message) {
        setTodoList(todoList.map((todoelement) => {
            if (todo == todoelement) {
                return({...todo, task:`${message}`, editable:false})
                }
            else {
                return(todoelement)
            }
            }
        ))
    }

    return ( 
        <div className='todo-item' key={todo.uuid}>
            <form className="edit">
                <input type='text' className="edit-task" onChange={(e) => {
                    setUserInput(e.target.value)
                }}></input>
                <input type="submit" value="Edit" className="extended" onClick={(e) => {
                    editTodo(todo, userinput)
                }}/>
            </form>
        </div>
    )
}
