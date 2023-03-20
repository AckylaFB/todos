import { useEffect, useState } from 'react';
import logo from './assets/Logo.png';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>(getStoragedTodos());

  const handleCreateTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeTodoStatus = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  useEffect(() => {
    localStorage.setItem('@todos:1.0.0', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="to do" />
      </header>

      <CreateTodo handleCreateTodo={handleCreateTodo} />

      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </div>
  );
}

function getStoragedTodos() {
  const storagedTodos = localStorage.getItem('@todos:1.0.0');

  if (storagedTodos) {
    return JSON.parse(storagedTodos);
  }

  return [];
}

export default App;
