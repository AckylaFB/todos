import TodoItem from './TodoItem';
import clipboard from './assets/Clipboard.svg';
import { TodoListProps } from './types';

function TodoList({
  todos,
  handleDeleteTodo,
  changeTodoStatus,
}: TodoListProps) {
  const completedTasks = todos.filter(todo => todo.completed).length;

  return (
    <section className="list-container">
      <header className="list-header">
        <div className="list-created-tasks">
          <h6>Tarefas criadas</h6>
          <span>{todos.length}</span>
        </div>

        <div className="list-completed-tasks">
          <h6>Concluídas</h6>
          <span>{`${completedTasks} de ${todos.length}`}</span>
        </div>
      </header>

      {todos.length ? (
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              changeTodoStatus={changeTodoStatus}
            />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </section>
  );
}

function EmptyList() {
  return (
    <section className="empty-list">
      <img src={clipboard} alt="Empty List" />
      <h6>Você ainda não tem tarefas cadastradas</h6>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}

export default TodoList;
