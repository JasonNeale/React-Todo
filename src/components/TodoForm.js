import React from 'react'


class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            taskName: ""
        }
    }

    handleChanges = e => {
        this.setState({ taskName: e.target.value })
    }

    handleAddTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName)
        this.state.taskName = ""
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleAddTask}>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.taskName}
                        onChange={this.handleChanges}
                    />
                    <button>Add Todo</button>
                </form>

                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm