import { createContext, useState } from "react";
export const TodoContext = createContext()

export function TodoContextProvider({ children }) {
    let [todoList, setTodoList] = useState([])

    return (<TodoContext.Provider value={{todoList, setTodoList}}>
        {children}
    </TodoContext.Provider>)
}