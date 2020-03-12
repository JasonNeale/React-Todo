import React from 'react'


function Todo({task, id, completed, toggleCompleted}) {

    return (
        <li
            className={`${completed ? "completed" : ""}`}
            onClick={e => toggleCompleted(id)}>{task}</li>
    )
}

export default Todo