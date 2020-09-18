import React, { Component } from 'react'
import Task from './Task'



class ToDoList extends Component {
    render() {
        return (
            <div className="tasks" id="task">
                { this.props.tasks.map(t => (
                    <Task key={ t.id } task = { t } handleClick={this.props.handleClick} targetId={this.props.targetId}/>  
                ))}
            </div>
        )
    }
    
}

export default ToDoList