import { useState } from "react";
import { TodoProvider, useTodo } from "./context";
import { useEffect } from "react";
import {TodoForm , TodoItem} from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        ...todo,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((current) => (current.id === id ? todo : current))
    );
  };

  const delteTodo = (id) => {
    setTodos((prev) => prev.filter((currenttodo) => currenttodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));

    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, delteTodo, toggleComplete }}
    >
      <div className="bg-[#0e4caa] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Pranav's React Todoapp
          </h1>

          <div className="mb-4">
          <TodoForm/>
            
            </div>
          <div className="flex flex-wrap gap-y-3">
          {
            todos.map((todo)=> (
              <div key={todo.id} className="w-full">

              <TodoItem todo={todo} />
              </div>
            ))
           }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
