import React, { Component } from 'react'



class Task extends Component {



    render() {
        return (
            <p>
                <input onClick={this.props.handleClick.bind(this, this.props.task.id)} className="input-checkbox" type="checkbox" defaultChecked={this.props.task.isComplete} />
                {this.props.task.body} 
            </p>
        )
    }
    
}

export default Task