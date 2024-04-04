import { useContext } from "react";
import { createContext  } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : 'todo msg',
            completed : false ,
        },
        {}
    ],
    addTodo : (todo)=>{

    },
    updateTodo : (id,todo)=>{},
    delteTodo : (id)=>{},
    toggleComplete : (id)=>{}


    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}



export const TodoProvider = TodoContext.Provider



