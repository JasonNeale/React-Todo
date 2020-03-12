import React from 'react';
import TodoList from './components/TodoList'


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
            <div className="row align-items-center page-wrapper">
                <div className="col align-self-center list-wrapper">
                    <TodoList
                        todoListState={this.state.todoListState}
                        addTask={this.addTask}
                        toggleCompleted={this.toggleCompleted}
                        clearCompleted={this.clearCompleted}
                    />
                </div>
            </div>
        )
    }
}

export default App;
