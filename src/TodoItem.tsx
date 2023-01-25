import { Trash } from 'phosphor-react';
import { TodoItemProps } from './types';

function TodoItem({ todo, changeTodoStatus, handleDeleteTodo }: TodoItemProps) {
  return (
    <li className="todo">
      <div>
        <input type="radio" checked={todo.completed} readOnly />
        <span onClick={() => changeTodoStatus(todo.id)}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
            alt="Checked Icon"
          />
        </span>
      </div>
      <p className={todo.completed ? 'todo-text todo-completed' : 'todo-text'}>
        {todo.text}
      </p>
      <Trash size={30} onClick={() => handleDeleteTodo(todo.id)} />
    </li>
  );
}

export default TodoItem;
