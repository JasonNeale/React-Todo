import React from 'react';

import TodoList from './components/TodoList'

const todoListData = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super()
        this.state = {
            todoListState: todoListData
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
  
    render() {
        return (
            <div>
                <TodoList todoListState={this.state.todoListState} addTask={this.addTask}/>
                {console.log('App>TodoList: ', this.state.todoListState)}
            </div>
        )
    }
}

export default App;
