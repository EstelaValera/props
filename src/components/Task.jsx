import React from "react";

function Task({ task, deleteTask, markedTask }) {
    return (
        <>
            <div>
                <li style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                    <span onClick={() => markedTask(task.id)} >{task.text}</span>
                    <button type="button" onClick={() => deleteTask(task.id)}>Eliminar</button>
                </li>
            </div>
        </>
    )
}

export default Task;