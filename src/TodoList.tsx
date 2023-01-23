import Todo from './Todo';
import clipboard from './assets/Clipboard.svg';

function TodoList() {
  const todos = [];

  return (
    <section className="list-container">
      <header className="list-header">
        <div className="list-created-tasks">
          <h6>Tarefas criadas</h6>
          <span>0</span>
        </div>

        <div className="list-completed-tasks">
          <h6>Concluídas</h6>
          <span>2 de 5</span>
        </div>
      </header>

      {todos.length ? (
        <ul className="todo-list">
          <Todo />
          <Todo />
          <Todo />
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
