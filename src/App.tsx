import { PlusCircle } from 'phosphor-react';
import logo from './assets/Logo.png';
import Input from './Input';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="to do" />
      </header>

      <section className="todo-creation">
        <Input />
        <button type="button" className="create-todo">
          Criar
          <PlusCircle size={24} />
        </button>
      </section>

      <TodoList />
    </div>
  );
}

export default App;
