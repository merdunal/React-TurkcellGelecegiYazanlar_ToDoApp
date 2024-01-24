import React from 'react'
import { useTodo } from "../../../contexts/TodoContext"

function Item({ todo }) {

    const { destroyTodo, toggleTodo } = useTodo();

    const onChange = (id) => toggleTodo(id);
    const onDestroy = (id) => destroyTodo(id);

    return (
        <li className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
                <label key={todo.id}>{todo.text}</label>
                <button className="destroy" onClick={() => onDestroy(todo.id)} ></button>
            </div>
        </li>
    )
}

export default Item