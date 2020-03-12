// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList({todoListState, addTask}) {

    return (
        <div>
            {todoListState.map(item => (
                <Todo
                    task={item.task}
                    key={item.id}
                    completed={item.completed}
                />
            ))}
            <TodoForm addTask={addTask}/>
        </div>
    )
}

export default TodoList
