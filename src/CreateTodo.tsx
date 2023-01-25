import { PlusCircle } from 'phosphor-react';
import { InputHTMLAttributes, useState } from 'react';
import './styles.css';
import { Todo } from './types';

function CreateTodo({
  handleCreateTodo,
  ...props
}: {
  handleCreateTodo: (todo: Todo) => void;
} & InputHTMLAttributes<HTMLInputElement>) {
  const [inputValue, setInputValue] = useState('');

  const onCreateTodo = () => {
    handleCreateTodo({
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date(),
    });

    setInputValue('');
  };

  return (
    <section className="todo-creation">
      <input
        className="input"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        {...props}
      />
      <button
        type="button"
        className="create-todo"
        onClick={onCreateTodo}
        disabled={inputValue.length === 0}
      >
        Criar
        <PlusCircle size={24} />
      </button>
    </section>
  );
}

export default CreateTodo;
