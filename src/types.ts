export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoListProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
}

export interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
}
