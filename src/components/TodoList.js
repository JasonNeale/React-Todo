// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList({todoListState, addTask, toggleCompleted, clearCompleted}) {

    return (
        <div>
            {todoListState.map(item => (
                <ul>
                    <Todo
                        task={item.task}
                        key={item.id}
                        id={item.id}
                        completed={item.completed}
                        toggleCompleted={toggleCompleted}
                    />
                </ul>
            ))}
            <TodoForm
                addTask={addTask}
                clearCompleted={clearCompleted}
            />
        </div>
    )
}

export default TodoList
