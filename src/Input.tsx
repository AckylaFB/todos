import { InputHTMLAttributes } from 'react';
import './styles.css';

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="input"
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  );
}

export default Input;
