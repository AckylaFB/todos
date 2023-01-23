import { Trash } from 'phosphor-react';

function Todo() {
  return (
    <li className="todo">
      <div>
        <input type="radio" id="color-1" checked />
        <span>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
            alt="Checked Icon"
          />
        </span>
      </div>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash size={30} />
    </li>
  );
}

export default Todo;
