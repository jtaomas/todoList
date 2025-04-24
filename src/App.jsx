import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import { TodoContextProvider } from './context/todocontext.jsx'

function App() {

    return(
        <div id='app-box'>
            <div id='items'> 
                <div id='header'>
                    <h1>Get Things Done!</h1>
                </div>
                <TodoContextProvider>
                    <TodoInput/>
                    <TodoList/>
                </TodoContextProvider>
            </div>
        </div>
        
    )
}

export default App