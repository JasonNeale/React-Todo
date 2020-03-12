import React from 'react';
import TodoList from './components/TodoList'
import './Todo.css'


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todoListState: []
        }
    }

    addTask = taskName => {
        this.setState({
            todoListState: [
                ...this.state.todoListState,
                {
                    task: taskName,
                    id: Date.now(),
                    completed: false
                }
            ]
        })
    }

    toggleCompleted = taskId => {
        this.setState({
            todoListState: this.state.todoListState.map(task => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        })
    }

    clearCompleted = () => {
        this.setState({
            todoListState: this.state.todoListState.filter(task => {
                return !task.completed
            })
        })
    }
  
    render() {
        return (
            <div>
                <TodoList
                    todoListState={this.state.todoListState}
                    addTask={this.addTask}
                    toggleCompleted={this.toggleCompleted}
                    clearCompleted={this.clearCompleted}
                />
            </div>
        )
    }
}

export default App;
